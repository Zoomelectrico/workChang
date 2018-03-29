const sequelize = require('../config/database');
const Appointment = require('../models/Appointment');
const Car = require('../models/Car');
const RepairOrder = require('../models/RepairOrder');
const RepairsReplacements = require('../models/RepairsReplacement');
const detailsRO = require('../models/detailsRO');
const cloudinary = require('../config/clodinary');
const QR = require('qrcode');

const ManagerController = {
  getAppointments: function (callback) {
    sequelize.query(
      "SELECT `appointments`.`ID`, `cars`.`model`, `cars`.`brand`, `cars`.`licensePlate` FROM `appointments` " +
      "INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID` " +
      "WHERE `appointments`.`checkout` = 0"
    ).spread((data, metada) => {
      if (data) {
        callback(null, data);
      } else {
        callback(new Error('Uppps... Hemos tenido error en nuestra Base de datos'), null);
      }
    });
  },
  getActivesOrders: function (callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID`, `cars`.`ID` AS carID, `mechanics`.`ID` AS mechanicID, CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName`, CONCAT(`cars`.`brand`, ' ', `cars`.`model`) AS `carName`, `cars`.`licensePlate` AS `carLicensePlate` FROM `repairorders` " +
      "INNER JOIN `appointments` ON `repairorders`.`AppointmentID` = `appointments`.`ID` " +
      "INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID` " +
      "INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID` " +
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` " +
      "WHERE `repairorders`.`exitDate` IS NULL;"
    ).spread((data, metada) => {
      if (data) {
        callback(null, data);
      } else {
        callback(new Error('Uppps... Hemos tenido un error en nuestra base de datos'), null);
      }
    });
  },
  verDetallesReparacion: function (repairOrderID, mechanicID, carID, callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID` AS `repairOrdersID` " +
      ",CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName` " +
      ",CONCAT(`cars`.`brand`, ' ', `cars`.`model`) AS `carName` " +
      ",`cars`.`licensePlate` AS `licensePlate` " +
      ",`repairorders`.`entryDate` AS `entryDate` " +
      ",CONCAT(`replacements`.`name`, ' ', `replacements`.`forModel`) AS `replacement` " +
      "FROM `repairorders` " +
      "INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID` " +
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` " +
      "INNER JOIN `appointments` ON `repairorders`.`AppointmentID` = `appointments`.`ID` " +
      "INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID` " +
      "LEFT JOIN `repairsreplacements` ON `repairorders`.`ID` = `repairsreplacements`.`RepairOrder` " +
      "LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID` " +
      "WHERE `repairorders`.`ID` = " + repairOrderID + 
      " AND `mechanics`.`ID` = " + mechanicID + 
      " AND `cars`.`ID` = " + carID
    ).spread((data, metada) => {
      if (data) {
        let replacements = [];
        data.forEach((element, i) => {
          replacements.push(element.replacement);
          if(i === data.length-1) {
            const newData = {
              "repairOrdersID": element.repairOrdersID,
              "mechanicName": element.mechanicName,
              "carName": element.carName,
              "licensePlate": element.licensePlate,
              "entryDate": element.entryDate,
              "replacements": replacements  
            }
            callback(null, newData);
          }
        });
      } else {
        callback(new Error('Uppps... Hemos tenido un error en nuestra base de datos'), null);
      }
    })
  },
  introduceRepairOrder: function (entryDate, MechanicID, AppointmentID, callback) {
    RepairOrder.create({
      entryDate: entryDate,
      MechanicID: MechanicID,
      AppointmentID: AppointmentID,
      QRCode: '',
      ready: 0,
      diagnostic: ''
    }).then(repairOrder => {
      console.log(1);
      if (repairOrder) {
        console.log(2);
        Appointment.findById(repairOrder.AppointmentID).then(appointment => {
          appointment.checkout = 1;
          console.log(3);
          appointment.save().then(() => {
            console.log(4);
            const opts = {
              errorCorrectionLevel: 'H',
              type: 'image/png'
            };
            console.log(5);
            QR.toDataURL((repairOrder.ID).toString(), opts, (err, url) => {
              console.log(6);
              if (err) {
                callback(new Error(''), null);
              } else {
                console.log(7);
                cloudinary.uploader.upload(url, result => {
                  console.log(8);
                  if(result) {
                    console.log(9);
                    repairOrder.QRCode = result.secure_url;
                    repairOrder.save().then(() => {console.log(10); callback(null, repairOrder)})
                    .catch(err => callback(new Error(''), null));
                  } else {
                    callback(new Error(''), null);
                  }
                });
              }
            });
          }).catch(err => callback(new Error('Nuestro Sistema esta teniendo dificultades intente más tarde'), null));
        }).catch(err => callback(new Error('Nuestro Sistema esta teniendo dificultades intente más tarde'), null));
      } else {
        callback(new Error('Hemos tenido un falla para registrar esta orden'), null)
      }
    }).catch(err => callback(err, null));
  },
  reciveCar: function(repairOrderID, details, photo, callback) {
    RepairOrder.findById(repairOrderID).then(repairOrder => {
      if (repairOrder) {
        if (repairOrder.exitDate) {
          callback(new Error('No lo se rick eso esta cerrado...'), null);
        } else {
          cloudinary.uploader.upload(photo, result => {
            if (result) {
              detailsRO.create({
                photoURL: result.secure_url,
                details: details,
                repairorderID: repairOrder.ID
              }).then(detailsro => {
                if (detailsro) {
                  callback(null, detailsro);
                } else {
                  callback(new Error(), null)
                }
              }).catch(err =>  callback(new Error(), null));
            } else {
              callback(new Error('Tuvimos un error subiendo la foto, vuelva a intentar'), null);
            }
          });
        }
      } else {
        callback(new Error('Eso no parece ser una orden de nuestro taller :s'), null)
      }
    });
  }
};

module.exports = ManagerController;
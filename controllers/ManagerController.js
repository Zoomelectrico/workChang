const QR = require('qrcode');
const sequelize = require('../config/database');
const Appointment = require('../models/Appointment');
const Car = require('../models/Car');
const RepairOrder = require('../models/RepairOrder');
const RepairsReplacements = require('../models/RepairsReplacement');
const detailsRO = require('../models/detailsRO');
const cloudinary = require('../config/clodinary');
const email = require('./EmailController');
const Client = require('../models/Client');
const User = require('../models/User')

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
      ",`repairorders`.`ready` AS `ready`" +
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
          if (i === data.length - 1) {
            const newData = {
              "repairOrdersID": element.repairOrdersID,
              "mechanicName": element.mechanicName,
              "carName": element.carName,
              "licensePlate": element.licensePlate,
              "entryDate": element.entryDate,
              "ready": element.ready,
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
      diagnostic: '',
      procedure: ''
    }).then(repairOrder => {
      if (repairOrder) {
        Appointment.findById(repairOrder.AppointmentID).then(appointment => {
          appointment.checkout = 1;
          appointment.save().then(() => {
            const opts = {
              errorCorrectionLevel: 'H',
              type: 'image/png'
            };
            QR.toDataURL((repairOrder.ID).toString(), opts, (err, url) => {
              if (err) {
                callback(new Error(''), null);
              } else {
                cloudinary.uploader.upload(url, result => {
                  if (result) {
                    repairOrder.QRCode = result.secure_url;
                    repairOrder.save().then(() => {
                      Car.findById(appointment.CarID).then(car => {
                        Client.findById(car.OwnerID).then(client => {
                          User.findById(client.UserID).then(user => {
                            let carData = `${car.brand} ${car.model} ${car.year} | ${car.licensePlate}`;
                            email.repairOrderEmail(user.firstName, user.email, carData, repairOrder.entryDate, repairOrder.QRCode, (err, info) => {
                              if (err) {
                                callback(err, null);
                              } else {
                                callback(null, repairOrder);
                              }
                            });
                          }).catch(err => callback(err, null));
                        }).catch(err => callback(err, null));
                      }).catch(err => callback(err, null));
                    }).catch(err => callback(err, null));
                  } else {
                    callback(err, null);
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
  receiveCar: function (repairOrderID, details, photo, diagnostic, callback) {
    console.log(diagnostic);
    console.log(1);
    RepairOrder.findById(repairOrderID).then(repairOrder => {
      console.log(2);
      if (repairOrder) {
        console.log(3);
        if (repairOrder.exitDate) {
          console.log(4);
          callback(new Error('No lo se rick eso esta cerrado...'), null);
        } else {
          console.log(5);
          cloudinary.uploader.upload(photo, result => {
            console.log(6);
            if (result) {
              console.log(7);
              repairOrder.diagnostic = diagnostic;
              console.log(8);
              repairOrder.save().then(() => {
                console.log(8.1);
                detailsRO.create({
                  photoURL: result.secure_url,
                  details: details,
                  repairorderID: repairOrder.ID
                }).then(detailsro => {
                  console.log(9);
                  if (detailsro) {
                    console.log(10);
                    callback(null, detailsro);
                  } else {
                    console.log(11);
                    callback(new Error('No se pudieron guardar los detalles'), null)
                  }
                }).catch(err => callback(err, null));
              }).catch(err => callback(err, null));
            } else {
              callback(new Error('Tuvimos un error subiendo la foto, vuelva a intentar'), null);
            }
          });
        }
      } else {
        callback(new Error('Eso no parece ser una orden de nuestro taller :s'), null)
      }
    });
  },
  cerrarOrden: function (id, exitDate, callback) {
    RepairOrder.findById(id).then(ro => {
      ro.exitDate = exitDate;
      ro.save().then(() => {
        Appointment.findById(ro.AppointmentID).then(a => {
          Car.findById(a.CarID).then(c => {
            Client.findById(c.OwnerID).then(client => {
              User.findById(client.UserID).then(u => {
                let carData = `${c.brand} ${c.model} ${c.year} | ${c.licensePlate}`;
                email.notificacionOrdenCerrada(u.firstName, u.email, carData, (err, info) => {
                  if(err) {
                    callback(err, null);
                  } else {
                    callback(null, ro);
                  }
                });
              }).catch(err => callback(err, null));
            }).catch(err => callback(err, null));
          }).catch(err => callback(err, null));
        }).catch(err => callback(err, null));
      }).catch(err => callback(err, null));
    }).catch(err => callback(err, null));
  }
};

module.exports = ManagerController;
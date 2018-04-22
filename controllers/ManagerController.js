const OP = require('sequelize').Op;
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
  introduceRepairOrder: async function (entryDate, MechanicID, AppointmentID, callback) {
    try {
      let ro = await RepairOrder.create({
        entryDate: entryDate,
        MechanicID: MechanicID,
        AppointmentID: AppointmentID,
        QRCode: '',
        ready: 0,
        diagnostic: '',
        procedure: ''
      });
      if (ro) {
        try {
          let a = await Appointment.findById(repairOrder.AppointmentID);
          a.checkout = 1;
          try {
            await a.save();
            const opts = {
              errorCorrectionLevel: 'H',
              type: 'image/png'
            };
            QR.toDataURL((ro.ID).toString(), opts, (err, url) => {
              if (err) {
                callback(err, null);
              } else {
                cloudinary.uploader.upload(url, async (result) => {
                  if (result) {
                    try {
                      ro.QRCode = result.secure_url;
                      await ro.save();
                      try {
                        const car = await Car.findById(a.CarID);
                        const client = await Client.findById(car.OwnerID);
                        const user = await User.findById(client.UserID);
                        let carData = `${car.brand} ${car.model} ${car.year} | ${car.licensePlate}`;
                        email.repairOrderEmail(user.firstName, user.email, carData, ro.entryDate, ro.QRCode, (err, info) => {
                          if (err) callback(err, null);
                          callback(null, ro);
                        });
                      } catch (e5) {
                        callback(e5, null);
                      }
                    } catch (e4) {
                      callback(e4, null);
                    }
                  } else {
                    callback(new Error(''))
                  }
                });
              }
            });
          } catch (e3) {
            callback(e3, null);
          }
        } catch (e2) {
          callback(e2, null);
        }
      } else {
        callback(new Error(''), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  receiveCar: async function (repairOrderID, details, photo, diagnostic, callback) {
    try {
      let ro = await RepairOrder.findById(repairOrderID);
      if (ro) {
        if (ro.exitDate) {
          callback(new Error('No lo se rick eso esta cerrado...'), null);
        } else {
          cloudinary.uploader.upload(photo, async (result) => {
            if (result) {
              try {
                ro.diagnostic = diagnostic;
                await ro.save();
                let d = await detailsRO.create({
                  photoURL: result.secure_url,
                  details: details,
                  repairorderID: repairOrder.ID
                });
                if (d) callback(null, d);
                callback(new Error(''), null);
              } catch (e2) {
                callback(e2, null);
              }
            } else {
              callback(new Error(''), null);
            }
          });
        }
      } else {
        callback(new Error(''), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  cerrarOrden: async function (id, exitDate, callback) {
    try {
      let ro = await RepairOrder.findById(id);
      ro.exitDate = exitDate;
      await ro.save();
      const a = await Appointment.findById(ro.AppointmentID);
      const c = await Car.findById(a.CarID);
      const client = await Client.findById(c.OwnerID);
      const u = await User.findById(client.UserID);
      let carData = `${c.brand} ${c.model} ${c.year} | ${c.licensePlate}`;
      email.notificacionOrdenCerrada(u.firstName, u.email, carData, (err, info) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, ro);
        }
      });
    } catch (e) {
      callback(e, null);
    }
  }
};

module.exports = ManagerController;
const Appointment = require('../models/Appointment');
const Car = require('../models/Car');
const RepairOrder = require('../models/RepairOrder');
const RepairsReplacements = require('../models/RepairsReplacement');
const sequelize = require('../config/database');

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
      QRCode: ''
    }).then(repairOrder => {
      if (repairOrder) {
        Appointment.findById(AppointmentID).then(appointment => {
          appointment.checkout = 1;
          appointment.save().then(() => callback(null, repairOrder)).catch(err => callback(err, null));
        }).catch(err => callback(err, null));
      } else {
        callback(new Error('Hemos tenido un falla para registrar esta orden'), null)
      }
    }).catch(err => callback(err, null));
  }
};

module.exports = ManagerController;
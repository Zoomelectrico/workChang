const Appointment = require('../models/Appointment');
const Car = require('../models/Car');
const RepairOrder = require('../models/RepairOrder');
const sequelize = require('../config/database');

const ManagerController = {
  getAppointments: function(callback) {
    sequelize.query(
      "SELECT `appointments`.`ID`, `cars`.`model`, `cars`.`brand`, `cars`.`licensePlate` FROM `appointments` "+
      "INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID` "+
      "WHERE `appointments`.`checkout` = 0"
    ).spread((data, metada) => {
      if (data) {
        callback(null, data);
      } else {
        callback(new Error('Uppps... Hemos tenido error en nuestra Base de datos'), null);
      }
    });
  },
  getActivesOrders: function(callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID`, CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName`, CONCAT(`cars`.`brand`, ' ', `cars`.`model`) AS `carName`, `cars`.`licensePlate` AS `carLicensePlate` FROM `repairorders` " +
      "INNER JOIN `appointments` ON `repairorders`.`AppointmentID` = `appointments`.`ID` "+
      "INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID` "+
      "INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID` "+
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` "+ 
      "WHERE `repairorders`.`exitDate` IS NULL;"
    ).spread((data, metada) => {
      if (data) {
        callback(null, data);
      } else {
        callback(new Error('Uppps... Hemos tenido un error en nuestra base de datos'), null);
      }
    });
  },
  introduceRepairOrder: function(entryDate, MechanicID, AppointmentID, callback) {
    RepairOrder.create({
      entryDate: entryDate,
      MechanicID: MechanicID,
      AppointmentID: AppointmentID,
      QRCode: ''
    }).then(repairOrder => {
      if (repairOrder) {
        Appointment.findById(AppointmentID).then(appointment => {
          appointment.checkout = 1;
          appointment.save().then(() => {
            callback(null, repairOrder);
          }).catch(err => callback(err, null));
        }).catch(err => callback(err, null));
      } else {
        callback(new Error('Hemos tenido un falla para registrar esta orden'), null)
      }
    }).catch(err => callback(err, null)); 
  }
};

module.exports = ManagerController;
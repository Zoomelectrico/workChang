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
      callback(null, data);
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
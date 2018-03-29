const Sequelize = require('sequelize');
const Mechanic = require('../models/Mechanic');
const RepairOrder = require('../models/RepairOrder');
const User = require('../models/User');
const sequelize = require('../config/database');

const MechanicController = {
  getMecanicosLibres: function(callback) {
    Mechanic.findAll().then(mechanics => {
      let users = [];
      mechanics.forEach((mechanic, i) => {
        User.findById(mechanic.UserID).then(user => {
          if (user) {
            const data = {
              mechanicID: mechanic.ID,
              userID: user.ID,
              nombre: user.firstName + ' ' + user.lastName,
              email: user.email
            }
            users.push(data);
          }
          if(i === mechanics.length - 1) {
            callback(null, users);
          }
        }).catch(err => callback(new Error(), null));
      });
    }).catch(err => callback(new Error(), null));
  },
  getOrdenesReparacion: function(userID, callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID` " +
      ",CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`, ', placa: ', `cars`.`licensePlate`) AS `carData` " +
      ",`repairorders`.`diagnostic` " +
      ",`detailsRO`.`details` " +
      ",`detailsRO`.`photoURL` " +
      ",CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `replacementData` " +
      "FROM `cars` " +
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID` " + 
      "INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID` " +
      "INNER JOIN `detailsRO` ON `repairorders`.`ID` = `detailsRO`.`repairOrderID` " +
      "LEFT JOIN `repairsreplacements` ON `repairorders`.`ID` = `repairsreplacements`.`RepairOrder` " +
      "LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID` " +  
      "WHERE `repairorders`.`MechanicID` = (SELECT `mechanics`.`ID` FROM `users` INNER JOIN `mechanics` ON `users`.`ID` = `mechanics`.`UserID` WHERE `users`.`nationalID`=" + nationalID + ")"
    ).spread((data, metada) => {
      if (data) {
        let replacements = [[]];
        let id = data[0].ID;
        let idx = 0;
        let repairs = [];
        repairs.push(data[0]);
        for (let i = 0; i < data.length; i++) {
          if (data[i].ID === id) {
            replacements[idx].push(data[i].replacementData)
          } else {
            idx++;
            repairs.push(data[i]);
            replacements[idx].push(data[i].replacementData);
          }
        }
        repairs.forEach((element, i) => {
          element.replacementData = replacements[i]; 
          if(i === repairs.length - 1) {
            callback(null, repairs);
          }
        });
      } else {
        callback(new Error(), null);
      }
    });
  }
};

module.exports = MechanicController;
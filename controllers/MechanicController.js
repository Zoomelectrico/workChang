const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const OP = Sequelize.Op;
const Mechanic = require('../models/Mechanic');
const RepairOrder = require('../models/RepairOrder');
const User = require('../models/User');
const Replacement = require('../models/Replacement');
const RepairsReplacement = require('../models/RepairsReplacement'); 
const Car = require('../models/Car');

const MechanicController = {
  getMecanicosLibres: function (callback) {
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
          if (i === mechanics.length - 1) {
            callback(null, users);
          }
        }).catch(err => callback(new Error(), null));
      });
    }).catch(err => callback(new Error(), null));
  },
  getOrdenesReparacion: function (userID, callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID` AS `ID`" +
      ",`cars`.`model` AS `carModel`"+
      ",`cars`.`serial` AS `serial`"+
      ",`repairorders`.`entryDate`" +
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
      "WHERE `repairorders`.`MechanicID` = (SELECT `mechanics`.`ID` FROM `users` INNER JOIN `mechanics` ON `users`.`ID` = `mechanics`.`UserID` WHERE `users`.`ID` = " + userID + ")"
    ).spread((data, metada) => {
      if (data) {
        let replacements = [
          []
        ];
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
          if (i === repairs.length - 1) {
            callback(null, repairs);
          }
        });
      } else {
        callback(err, null);
      }
    });
  },
  getRepuestos: function (model, callback) {
    if (model) {
      Replacement.findAll({
        where: {
          inStock: {
            [OP.gt]: 0
          },
          forModel: {
            [OP.like]: `%${model}%`
          }
        }
      }).then(replacements => {
        Replacement.findAll({
          where: {
            inStock: {
              [OP.gt]: 0
            },
            forModel: {
              [OP.like]: `todos`
            }
          }
        }).then(generics => {
          let r = [];
          if(replacements){
            replacements.forEach((replacement, i) => {
              console.log("en replacements funciona");
              r.push(replacement);
              console.log("en replacements push funciona");
            });
            console.log("continua");
            if(generics){
              console.log("en generics funciona 1");
              generics.forEach((g, j) => {
                console.log("en generics funciona2");
                r.push(g);
                if(j === generics.length - 1) {
                  console.log("en generics funciona3");
                  callback(null, r);
                }
                console.log("en generics funciona4");
              });
            } else {
              console.log("en generics no funciona");
              callback(null, r);
            }
            console.log("en generics no funciona2");
          } else {
            if(generics){
              generics.forEach((g, j) => {
                console.log("en generics funciona");
                r.push(g);
                if(j === generics.length - 1) {
                  callback(null, r);
                }
              });
            }else {
              console.log("en generics no funciona");
              callback(null, r)
            }
          }
          
        }).catch(err => callback(err, null));
      }).catch(err => callback(err, null));
    }
  }, 
  getOrdenByID: function(id, callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID` AS `ID`" +
      ",`cars`.`model` AS `carModel`"+
      ",`repairorders`.`entryDate`" +
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
      "WHERE `repairorders`.`ID` = " + id
    ).spread((data, metada) => {
      if (data) {
        let replacements = [
          []
        ];
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
          if (i === repairs.length - 1) {
            callback(null, repairs);
          }
        });
      } else {
        callback(err, null);
      }
    });
  },
  actualizarOrden: function(id, orden, callback) {
    RepairOrder.findById(id).then(ro => {
      ro.procedure = orden.procedure;
      ro.save().then(() => {
        orden.replacements.forEach((r, i) => {
          RepairsReplacement.create({ RepairOrder: ro.ID, Replacement: r.ID }).then(rr => {
            Replacement.findById(r.ID).then(rep => {
              rep.inStock -= r.stock;
              rep.save().then(() => {
                if(i === orden.replacements.length - 1) {
                  callback(null);
                }
              }).catch(err => callback(err)); 
            }).catch(err => callback(err));
          }).catch(err => callback(err)); 
        });
      }).catch(err => callback(err));
    }).catch(err => callback(err));
  },
  cerrarOrden: function(id, callback) {
    RepairOrder.findById(id).then(ro => {
      ro.ready = 1;
      ro.save().then(() => {
        callback(null);
      }).catch(err => callback(err));
    }).catch(err => callback(err));
  },
  getCarroBySerial(serial, callback) {
    Car.findOne({
      where: {
        serial: serial
      }
    }).then(car => {
      callback(null, car);
    }).catch(err => callback(err, null));
  }
};

module.exports = MechanicController;
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
  getMecanicosLibres: async function (callback) {
    try {
      let mechanics = await Mechanic.findAll();
      if (mechanics) {
        let users = [];
        mechanics.forEach(async (mechanic, i) => {
          const user = await User.findById(mechanic.UserID);
          if (user) {
            const data = {
              mechanicID: mechanic.ID,
              userID: user.ID,
              nombre: `${user.firstName} ${user.lastName}`,
              email: user.email
            }
            users.push(data);
          }
          if (i === mechanics.length - 1) {
            callback(null, users);
          }
        });
      } else {
        callback(new Error(''), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  getOrdenesReparacion: function (userID, callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID` AS `ID`" +
      ",`cars`.`model` AS `carModel`" +
      ",`cars`.`serial` AS `serial`" +
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
  getRepuestos: async function (model, callback) {
    if (model) {
      try {
        let replacements = await Replacement.findAll({
          where: {
            inStock: {
              [OP.gt]: 0
            },
            forModel: {
              [OP.like]: `%${model}%`
            }
          }
        });
        let generics = await Replacement.findAll({
          where: {
            inStock: {
              [OP.gt]: 0
            },
            forModel: {
              [OP.like]: `todos`
            }
          }
        });
        if (generics && replacements) {
          let r = [];
          replacements.forEach((replacement, i) => {
            r.push(replacement);
            if (i >= replacements.length - 1) {
              generics.forEach((g, j) => {
                r.push(g);
                if (j === generics.length - 1) {
                  callback(null, r);
                }
              });
            }
          });
        } else {
          if (generics) {
            callback(null, generics);
          } else {
            callback(null, replacements);
          }
        }
      } catch (e) {
        callback(e, null);
      }
    }
  },
  getOrdenByID: function (id, callback) {
    sequelize.query(
      "SELECT `repairorders`.`ID` AS `ID`" +
      ",`cars`.`model` AS `carModel`" +
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
  actualizarOrden: async function (id, orden, callback) {
    try {
      let ro = await RepairOrder.findById(id);
      ro.procedure = orden.procedure;
      await ro.save();
      orden.replacements.forEach(async (r, i) => {
        try {
          let rr = await RepairsReplacement.create({
            RepairOrder: ro.ID,
            Replacement: r.ID
          });
          let rep = await Replacement.findById(r.ID);
          rep.inStock -= r.stock;
          await rep.save();
          if (i === orden.replacements.length - 1) callback(null);
        } catch (e2) {
          callback(e2);
        }
      });
    } catch (e) {
      callback(e);
    }
  },
  cerrarOrden: async function (id, callback) {
    try {
      let ro = await RepairOrder.findById(id);
      ro.ready = 1;
      await ro.save();
      callback(null);  
    } catch (e) {
      callback(e);
    }
  },
  getCarroBySerial: async function(serial, callback) {
    try {
      let car = await Car.findOne({
        where: {
          serial: serial
        }
      });
      if(car) callback(null, car);
      callback(new Error('NO tuvimos exito'), null);
    } catch (e) {
      callback(e, null);
    }
  }
};

module.exports = MechanicController;
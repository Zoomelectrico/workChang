const db = require('../config/database');

const QueryInterface = {
  clientHistorical: function(nationalID, callback) {
    db.query(
      "SELECT CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`, ' ') AS `Datos del Carro`"+
      ",CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Datos del Mecanico`"+
      ",`repairorders`.`entryDate` AS `Dia de Entrada`"+
      ",DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Tiempo pasado en el taller`"+
      ",`repairorders`.`diagnostic` AS `Diagnostico`"+ 
      ",CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Datos de Repuesto`"+
      "FROM `clients`"+
      "INNER JOIN `cars` ON `clients`.`ID` = `cars`.`OwnerID`"+
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`"+
      "INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`"+
      "INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`"+
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`"+ 
      "LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`"+
      "LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`"+
      "WHERE `clients`.`ID` = (SELECT `clients`.`ID` FROM `clients` INNER JOIN `users` ON `users`.`ID` = `clients`.`UserID` WHERE `users`.`nationalID` = " + nationalID + " AND `users`.`type` = 1)"
    ).spread((data, metada) => {
      if(data) {
        callback(null, data);
      } else {
        callback(new Error('Hemos tenido un error en nuestra base de datos :('), null);
      }
    });
  },
  carHistorical: function(licensePlate, callback) {
    db.query(
      "SELECT CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`, ' ') AS `Datos del Carro`"+
      ",CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Datos del Mecanico`"+
      ",`repairorders`.`entryDate` AS `Dia de entrada`"+
      ",`repairorders`.`exitDate` AS `Dia de salida`"+
      ",DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Tiempo en el Taller`"+
      ",`repairorders`.`diagnostic` AS `Diagnostico`"+
      ",CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Informamcion del respuesto`"+
      "FROM `cars`"+
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`"+
      "INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`"+
      "INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`" +
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`" + 
      "LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`" +
      "LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`" +
      "WHERE `cars`.`licensePlate` = '" + licensePlate + "'"
    ).spread((data, metada) => {
      if(data) {
        callback(null, data);
      } else {
        callback(new Error('Hemos tenido un error en nuestra base de datos :('), null);
      }
    });
  },
  mechanicHistorical: function(date1, date2, nationalID, callback) {
    db.query(
      "SELECT CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Mechanic Name`"+ 
      ",CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`) AS `Car Data`"+
      ",`cars`.`licensePlate` AS `License Plate`"+
      ",`cars`.`serial` AS `Serial`"+
      ",`repairorders`.`diagnostic` AS `Diagnostic`"+
      ",`repairorders`.`entryDate` AS `Reception Date`"+
      ",`repairorders`.`exitDate` AS `Exit Date`"+
      ",DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Time in the workshop`"+
      ",CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Replacement Info`"+
      "FROM `cars`"+
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`"+
      "INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`"+
      "INNER JOIN `mechanics` ON `mechanics`.`ID` = `repairorders`.`MechanicID`"+
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`"+
      "LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`"+
      "LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`"+
      "WHERE `repairorders`.`entryDate` BETWEEN '" + date1 + "' AND '" + date2 + "' AND `mechanics`.`ID` = (SELECT `mechanics`.`ID` FROM `mechanics` INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` WHERE `users`.`nationalID` = " + nationalID + " AND `users`.`type` = 3)"
    ).spread((data, metada) => {
      if(data) {
        callback(null, data);
      } else {
        callback(new Error('Hemos tenido un error en nuestra base de datos :('), null);
      }
    });
  },
  modelHistorical: function(date1, date2, model, callback) {
    db.query(
      "SELECT CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Mechanic Name`"+ 
      ",CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`) AS `Car Data`"+
      ",`cars`.`licensePlate` AS `License Plate`"+
      ",`cars`.`serial` AS `Serial`"+
      ",`repairorders`.`diagnostic` AS `Diagnostic`"+
      ",`repairorders`.`entryDate` AS `Reception Date`"+
      ",`repairorders`.`exitDate` AS `Exit Date`"+
      ",DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Time in the workshop`"+
      ",CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Replacement Info`"+
      "FROM `cars`"+
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`"+
      "INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`"+
      "INNER JOIN `mechanics` ON `mechanics`.`ID` = `repairorders`.`MechanicID`"+
      "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`"+
      "LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`"+
      "LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`"+
      "WHERE `repairorders`.`entryDate` BETWEEN '" + date1 + "' AND '" + date2 + "' AND `cars`.`model` LIKE '" + model +"%' " 
    ).spread((data, metada) => {
      if(data) {
        callback(null, data);
      } else {
        callback(new Error('Hemos tenido un error en nuestra base de datos :('), null);
      }
    });
  }
};

module.exports = QueryInterface;
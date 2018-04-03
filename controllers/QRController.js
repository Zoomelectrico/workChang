const cloudinary = require('cloudinary');
const request = require('request');
const sequelize = require('../config/database');

const QRController = {
  uploadQR: function (qr, callback) {
    if (qr) {
      cloudinary.uploader.upload(qr, result => {
        if (result) {
          let url = 'http://api.qrserver.com/v1/read-qr-code/?fileurl=';
          url += result.secure_url;
          request(url, (err, response, body) => {
            if(err){
              callback(new Error('Uppss... No podemos leer los códigos ahorita :('), null);
            } else {
              const bodyParse = JSON.parse(body);
              const roID = bodyParse[0].symbol[0].data;
              sequelize.query(
                "SELECT CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName` " +
                ",CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`) AS `carName` " +
                ",`cars`.`licensePlate` " +
                ",`repairorders`.`ID` " +
                "FROM `appointments` " +
                "INNER JOIN  `cars` ON `appointments`.`CarID`= `cars`.`ID` " +
                "INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID` " +
                "INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID` " +
                "INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` " +
                "WHERE `repairorders`.`ID` = " + parseInt(roID)
              ).spread((data, metada) => {
                if(data) {
                  callback(null, data[0]);
                } else {
                  callback(new Error('Uppss... Estamos enfrentado errores con nuestra Base de Datos'), null);
                }
              });
            }
          });
        } else {
          callback(new Error('Nuestro provedor de Imagenes exploto :('), null);
        }
      });
    } else {
      callback(new Error('Estem... Como te digo que no mandas una imagen jejejej'), null);
    }
  }
};

module.exports = QRController;
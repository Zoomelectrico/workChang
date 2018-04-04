const cloudinary = require('../config/clodinary');
const sequelize = require('../config/database');
const Client = require('../models/Client');
const User = require('../models/User');
const Car = require('../models/Car');
const Appoiment = require('../models/Appointment');

const ClientController = {
  askAppoiment: function (serial, callback) {
    Car.findOne({
      where: {
        serial: serial
      }
    }).then(car => {
      Appoiment.findOne({
        where: {
          CarID: car.ID
        }
      }).then(appoiment => {
        if (appoiment) {
          callback(new Error('Este vehículo ya tiene un cita activa'), null);
        } else {
          Appoiment.create({
            checkout: 0,
            CarID: car.ID
          }).then(appoiment2 => callback(null, appoiment2)).catch(err => callback(err, null));
        }
      }).catch(err => callback(err, null));
    }).catch(err => callback(err, null));
  },
  modifyData: function (user, callback) {
        User.findOne({
          where: {
            ID: user.ID
          }
        }).then(userFin => {
          if (userFin) { 
            userFin.update({
              nationalID: user.nationalID,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              addressLine1: user.addressLine1,
              addressLine2: user.addressLine2,
              city: user.city,
            }).then(userFin => {callback(null, userFin)}).catch(err => callback(new Error('Que Dios proteja el servidor porque no sabemos que estamos haciendo'), null)); // Llama al callback
          } else {
            callback(new Error('Que intentas rick no hay nadie con ese username :s'), null); // No hay ese repuesto
          }
        }).catch(err => callback(err, null));
      },
  register: function (userID, callback) {
    Client.create({
      User: UserID
    }).then(() => {
      Client.findOne({
          where: {
            User: UserID
          }
        }).then(client => callback(null, client))
        .catch(err => callback(err, null));
    });
  },
  carRegister: function (car, callback) {
    Car.findOne({
      where: {
        serial: car.serial
      }
    }).then(carFin => {
      if (carFin) {
        carFin.OwnerID = car.OwnerID
        carFin.active = 1;
        carFin.save().then(() => callback(null, carFin))
          .catch(err => callback(err, null));
      } else {
        cloudinary.uploader.upload(car.photoLink, result => {
          car.photoLink = result.secure_url;
          Car.create(car).then(() => {
            Car.findOne({
                where: {
                  serial: car.serial
                }
              }).then(car => callback(null, car))
              .catch(err => callback(err, null));
          });
        });
      }
    }).catch(err => {
      console.log('epa 4', err);
      callback(err, null)
    });
  },
  getCars: function (ClientID, callback) {
    Car.findAll({
      where: {
        OwnerID: ClientID
      }
    }).then(cars => {
      callback(null, cars);
    }).catch(err => callback(err, null));
  },
  findByNationalID: function (nationalID, callback) {
    User.findOne({
      where: {
        nationalID: nationalID,
        type: 1
      }
    }).then(user => {
      if (user) {
        callback(null, user)
      } else {
        callback(new Error('No existe ningun usuario registrado con ese numero de cedula'), null);
      }
    }).catch(err => callback(err, null));
  },
  desactiveCars: function (carSerial, callback) {
    Car.findOne({
        where: {
          serial: carSerial
        }
      }).then(car => {
        if (car) {
          car.active = 0;
          car.OwnerID = 0;
          car.save().then(() => {
            Appoiment.destroy({
              where: {
                CarID: car.ID,
                checkout: 0
              }
            }).then(affectedRow => {
              console.log(affectedRow);
              callback(null, car)
            }).catch(err => callback(err, null));
          }).catch(err => callback(err, null));
        } else {
          callback(new Error('No se ha encontrado ningun carro con ese serial'), null);
        }
      }).catch(err => callback(err, null));
  },
  getAksedAppointments: function (userID, callback) {
    sequelize.query(
      "SELECT `appointments`.`ID`, `cars`.`brand`, `cars`.`model`, `cars`.`licensePlate`, if(`appointments`.`checkout` = 0, 'En lista de espera', 'En el taller') AS `estado` FROM `users` " +
      "INNER JOIN `clients` ON `users`.`ID` = `clients`.`UserID` " +
      "INNER JOIN `cars` ON `clients`.`ID` = `cars`.`OwnerID` " +
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID` " +
      "WHERE `clients`.`UserID` = " +  userID
    ).spread((data, metada) => {
      if (data) {
        callback(null, data);
      } else {
        callback(new Error('Uppps... Hemos tenido un error en nuestra base de datos', null));
      }
    });
  }
};

module.exports = ClientController;
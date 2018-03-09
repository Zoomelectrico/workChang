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
      })
    });
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
        Car.create(car).then(() => {
          Car.findOne({
              where: {
                serial: car.serial
              }
            }).then(car => callback(null, car))
            .catch(err => (err, null));
        });
      }
    }).catch(err => callback(err, null));
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
  findByNationalID: function(nationalID, callback) {
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
  desactiveCars: function(carSerial, callback) {
    Car.findOne({
      where: {
        serial: carSerial        
      }
    }).then(car => {
      if (car) {
        car.active = 0;
        car.OwnerID = 0;
        car.save().then(() => {
          callback(null, car);
        }).catch(err => callnack(err, null));
      } else {
        callback(new Error('No se ha encontrado ningun carro con ese serial'), null);
      }
    })
    .catch(err => {

    })
  },
  getAksedAppointments: function(userID, callback) {
    sequelize.query(
      "SELECT `appointments`.`ID`, `cars`.`brand`, `cars`.`model`, `cars`.`licensePlate`, if(`appointments`.`checkout` = 0, 'En lista de espera', 'En el taller') AS `estado` FROM `users` "+
      "INNER JOIN `clients` ON `users`.`ID` = `clients`.`UserID` "+
      "INNER JOIN `cars` ON `clients`.`ID` = `cars`.`OwnerID` "+
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID` "+
      "WHERE `clients`.`UserID` = " + userID
    ).spread((data, metada) => {
      if(data) {
        callback(null, data);
      } else {
        callback(new Error('Uppps... Hemos tenido un error en nuestra base de datos', null));
      }
    });
  }
};

module.exports = ClientController;
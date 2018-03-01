const Client = require('../models/Client');
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
          callback(new Error('This Car already have an appoiment'), null);
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
    Car.create(car).then(() => {
      Car.findOne({
          where: {
            serial: car.serial
          }
        }).then(car => callback(null, car))
        .catch(err => (err, null));
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
  }
};

module.exports = ClientController;
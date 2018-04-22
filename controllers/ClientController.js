const cloudinary = require('../config/clodinary');
const sequelize = require('../config/database');
const Client = require('../models/Client');
const User = require('../models/User');
const Car = require('../models/Car');
const Appoiment = require('../models/Appointment');

const ClientController = {
  askAppoiment: async function (serial, callback) {
    try {
      let car = await Car.findOne({
        where: {
          serial: serial
        }
      });
      if (car) {
        try {
          let appointment = await Appoiment.findOne({
            where: {
              CarID: car.ID
            }
          });
          if (appoiment) {
            callback(new Error('Este vehículo ya tiene un cita activa'), null);
          } else {
            try {
              let appoiment2 = await Appoiment.create({
                checkout: 0,
                CarID: car.ID
              });
              callback(null, appoiment2);
            } catch (e3) {
              callback(e3, null);
            }
          }
        } catch (e2) {
          callback(e2, null);
        }
      } else {
        callback(new Error('No existe ningun carro registrado con este serial'));
      }
    } catch (e) {
      callback(e, null);
    }
  },
  register: async function (User, callback) {
    try {
      await Client.create({
        User
      });
      let client = await Client.findOne({
        where: {
          User: UserID
        }
      });
      if (client) {
        callback(null, client);
      } else {
        callback(new Error('Ocurrio un error registrado al cliente'));
      }
    } catch (e) {
      callback(e, null);
    }
  },
  carRegister: async function (car, callback) {
    try {
      let c = await Car.findOne({
        where: {
          serial: car.serial
        }
      });
      if (c) {
        const bool = (c.serial === car.serial) &&
          (c.licensePlate === car.licensePlate) && (c.model === car.model) &&
          (c.brand === car.brand) && (c.year === car.year);
        if (bool) {
          c.OwnerID = car.OwnerID;
          c.active = 1;
          try {
            await c.save();
            callback(null, c);
          } catch (e2) {
            callback(e2, null);
          }
        } else {
          callback(new Error('Usted esta registrando un vehículo con datos erroneos'))
        }
      } else {
        cloudinary.uploader.upload(car.photoLink, async (result) => {
          car.photoLink = result.secure_url;
          try {
            await Car.create(car);
            let c2 = await Car.findOne({
              where: {
                serial: car.serial
              }
            });
            callback(null, c2);
          } catch (e3) {
            callback(e3, null);
          }
        });
      }
    } catch (e) {
      callback(e, null);
    }
  },
  getCars: async function (ClientID, callback) {
    try {
      let cars = await Car.findAll({
        where: {
          OwnerID: ClientID
        }
      });
      callback(null, cars);
    } catch (e) {
      callback(e, null);
    }
  },
  findByNationalID: async function (nationalID, callback) {
    try {
      let u = await User.findOne({
        where: {
          nationalID: nationalID,
          type: 1
        }
      });
      if (u) {
        callback(null, u);
      } else {
        callback(new Error('No existe ningun usuario registrado con ese numero de cedula'), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  desactiveCars: async function (carSerial, callback) {
    try {
      let car = Car.findOne({
        where: {
          serial: carSerial
        }
      });
      if (car) {
        car.active = 0;
        car.OwnerID = 0;
        try {
          await car.save();
          let ar = await Appoiment.destroy({
            where: {
              CarID: car.ID,
              checkout: 0
            }
          });
          callback(null, car);
        } catch(e2) {
          callback(e2, null);
        }
      } else {
        callback(new Error('No se ha encontrado ningun carro con ese serial'), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  getAksedAppointments: function (userID, callback) {
    sequelize.query(
      "SELECT `appointments`.`ID`, `cars`.`brand`, `cars`.`model`, `cars`.`licensePlate`, if(`appointments`.`checkout` = 0, 'En lista de espera', 'En el taller') AS `estado` FROM `users` " +
      "INNER JOIN `clients` ON `users`.`ID` = `clients`.`UserID` " +
      "INNER JOIN `cars` ON `clients`.`ID` = `cars`.`OwnerID` " +
      "INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID` " +
      "WHERE `clients`.`UserID` = " + userID
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
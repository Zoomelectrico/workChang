const Client = require('../models/Client');
const Car = require('../models/Car');
const Appoiment = require('../models/Appointment');

const ClientController = {
  askAppoiment: function (carID, callbackS) {
    Appoiment.create({ // Crea la Cita
      Car: CarID
    }).then(() => {
      Appoiment.findOne({ //Luego la busca
        where: {
          Car: CarID
        }
      }).then(appoiment => callback(null, appoiment)) // LLama al callback del usuario
      .catch(err => callback(err, null)); // Si hubo un error lo devuelve
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
  carRegister(car, callback) {
    Car.create(car).then(() => {  
      Car.findOne({
        where: {
          serial: car.serial
        }
      }).then(car => callback(null, car))
        .catch(err => (err, null));
    });
  }
};

module.exports = ClientController;

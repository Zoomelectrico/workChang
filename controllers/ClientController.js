const Client = require('../models/Client');
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
  }
};

module.exports = ClientController;

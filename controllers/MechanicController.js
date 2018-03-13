const Sequelize = require('sequelize');
const Mechanic = require('../models/Mechanic');
const RepairOrder = require('../models/RepairOrder');
const User = require('../models/User');


const MechanicController = {
  getMecanicosLibres: function(callback) {
    RepairOrder.findAll({
      where: {
        exitDate: null
      }
    }).then(repairorders => { // Busco todas las ordenes de repación activas
      let busyMechanicsID = []; // vector de id de mecanicos que estan atendiendo ordenes
      repairorders.forEach((element, i) => { // recorro el vector
        busyMechanicsID.push(element.MechanicID);
        if (i === repairorders.length-1) { // cuando recorrio todo el vector
          Mechanic.findAll({ 
            where: {
              ID: { [Sequelize.Op.notIn]: busyMechanicsID } //Busca todos aquellos que no esten ocupados
            }
          }).then(mechanics => {
            let usersID = []; // vector de ids de usuarios
            mechanics.forEach((element, i) => { // recorro el vector de mecanicos
              usersID.push(element.UserID);
              if(i === mechanics.length-1) { // cuando llegue al final
                User.findAll({
                  where: {
                    ID: { [Sequelize.Op.in]: usersID } 
                    // dame todos los usuarios que corresponde a los mecanicos no ocupados
                  }
                }).then(users => {
                  let finalData = []; // vector que envio al cliente
                  users.forEach((element, i) => {
                    // preparo la información que me interesa enviar
                    let data = {
                      mechanicID: mechanics[i].ID,
                      userID: element.ID,
                      nombre: element.firstName + ' ' + element.lastName,
                      email: element.email
                    };
                    finalData.push(data);
                    if (i === users.length-1) {
                      callback(null, finalData); 
                    }
                  });
                }).catch(err => callback(err, null));
              }
            });
          }).catch(err => callback(err, null));     
        }
      });
    }).catch(err => callback(err, null));
  }
};

module.exports = MechanicController;
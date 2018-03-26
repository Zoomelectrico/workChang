const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Client = require('../models/Client');
const Manager = require('../models/Manager');
const Mechanic = require('../models/Mechanic');
const Administrator = require('../models/Administrator');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const UserController = {
  registerUser: function (user, callback) {
    User.findOne({
      where: {
        username: user.username
      }
    }).then(userFin => {
      if (userFin) {
        callback(new Error('... Se mas original, ese username ya es de alguien'), null);
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) { 
            callback(new Error('Upps... Tu contraseña es demasiado poderosa para nosotros :('), null); 
          } else {
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) {
                callback(new Error('Upps... Algo ha salido horrible'), null);
              } else {
                user.password = hash;
                User.create(user).then(user => {
                  if (user) {
                    const type = parseInt(user.type);
                    switch (type) {
                      case 1:
                        Client.create({
                            UserID: user.ID
                          }).then(client => callback(null, user))
                          .catch(err => {
                            // TODO: Eliminar al Usuario
                            callback(new Error('Nos hemos equivocado en algo :('), null)
                          });
                        break;
                      case 2:
                        Manager.create({
                            UserID: user.ID
                          }).then(manager => callback(null, user))
                          .catch(err => {
                            // TODO: Eliminar al Usuario
                            callback(new Error('Nos hemos equivocado en algo :('), null)
                          });
                        break;
                      case 3:
                        Mechanic.create({
                            UserID: user.ID
                          }).then(mechanic => callback(null, user))
                          .catch(err => {
                            // TODO: Eliminar al Usuario
                            callback(new Error('Nos hemos equivocado en algo :('), null)
                          });
                        break;
                      case 4:
                        Administrator.create({
                            UserID: user.ID
                          }).then(administrator => callback(null, user))
                          .catch(err => {
                            // TODO: Eliminar al Usuario
                            callback(new Error('Nos hemos equivocado en algo :('), null)
                          });
                        break;
                      default:
                        callback(new Error('OH MAI GOSH QUE PASO'), null);
                    }
                  } else {
                    callback(new Error('Uppps... Fallamos y no pudimos hacer nada :('), null);
                  }
                }).catch(err => callback(new Error('Estem... La cosa exploto'), null));
              }
            });
          }
        });
      }
    }).catch(err => callback(err, null));
  },
  comparePassword: function (password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, isMatch);
      }
    });
  },
  searchClient: function (userID, callback) {
    Client.findOne({
        where: {
          UserID: userID
        }
      }).then(client => callback(null, client))
      .catch(err => callback(err, null));
  },
  searchManager: function (userID, callback) {
    Manager.findOne({
        where: {
          userID: userID
        }
      }).then(manager => callback(null, manager))
      .catch(err => callback(err, null));
  },
  searchMechanic: function (userID, callback) {
    Mechanic.findOne({
        where: {
          userID: userID
        }
      }).then(mechanic => callback(null, mechanic))
      .catch(err => callback(err, null));
  },
  searchAdministrator: function (userID, callback) {
    Administrator.findOne({
        where: {
          userID: userID
        }
      }).then(administrator => callback(null, administrator))
      .catch(err => callback(err, null));
  },
  getAllWorkers: function(callback) {
    User.findAll({
      where: {
        [Op.or]: [{type: 2}, {type:3}, {type: 4}] 
      }
    })
    .then(users => callback(null, users))
    .catch(err => callback(err, users));
  },
  searchUser: function (userID, callback) {
    User.findOne({
        where: {
          ID: userID
        }
      }).then(user => callback(null, user))
      .catch(err => callback(err, null));
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
          username: user.username,
          addressLine1: user.addressLine1,
          addressLine2: user.addressLine2,
          city: user.city,
          type: user.type
        }).then(userFin => {callback(null, userFin)}).catch(err => callback(new Error('Que Dios proteja el servidor porque no sabemos que estamos haciendo'), null)); // Llama al callback
      } else {
        callback(new Error('Que intentas rick no hay nadie con ese username :s'), null); // No hay ese repuesto
      }
    }).catch(err => callback(err, null));
  }
};

module.exports = UserController;
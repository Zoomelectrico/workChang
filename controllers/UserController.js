const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Client = require('../models/Client');
const Manager = require('../models/Manager');
const Mechanic = require('../models/Mechanic');
const Administrator = require('../models/Administrator');


const UserController = {
  registerUser: function (user, callback) {
    User.findOne({
      where: {
        username: user.username
      }
    }).then(userFin => {
      if (userFin) {
        callback(new Error('Este username ya ha sido utilizado'), null);
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) { throw err; }
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
              callback(err, null);
            } else {
              user.password = hash;
              User.create(user).then(user => {
                if (user) {
                  switch (user.type) {
                    case 1:
                      Client.create({
                          UserID: user.ID
                        }).then(client => callback(null, user))
                        .catch(err => callback(err, null));
                      break;
                    case 2:
                      Manager.create({
                          UserID: user.ID
                        }).then(client => callback(null, user))
                        .catch(err => callback(err, null));
                      break;
                    case 3:
                      Mechanic.create({
                          UserID: user.ID
                        }).then(client => callback(null, user))
                        .catch(err => callback(err, null));
                      break;
                    case 4:
                      Administrator.create({
                          UserID: user.ID
                        }).then(client => callback(null, user))
                        .catch(err => callback(err, null));
                      break;
                    default:
                      callback(new Error('ERROR PAPI'), null);
                  }
                } else {
                  callback(new Error('El usuario no ha sido creado'), null);
                }
              }).catch(err => callback(err, null));
            }
          });
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
  changePassword: function (username, code, generateCode, newPassword) {
    if (code === generateCode) {
      User.findOne({
        where: {
          username: username
        }
      }).then(user => {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) console.error(err);
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) console.error(err);
            user.update({
              password: hash
            }).then(() => {
              console.log('All good')
            });
          })
        });
      }).catch(err => console.error(err));
    }
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
  }
};

module.exports = UserController;
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Client = require('../models/Client');
const Manager = require('../models/Manager');
const Mechanic = require('../models/Mechanic');
const Administrator = require('../models/Administrator');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Op = Sequelize.Op;

const UserController = {
  registerUser: async function (user, callback) {
    try {
      let uFinded = await User.findOne({
        where: {
          username: user.username
        }
      });
      if (uFinded) {
        callback(new Error('... Se mas original, ese username ya es de alguien'), null);
      } else {
        bcrypt.genSalt(15, (err, salt) => {
          if (err) {
            callback(new Error('Upps... Tu contraseña es demasiado poderosa para nosotros :('), null);
          } else {
            bcrypt.hash(user.password, salt, async (err, hash) => {
              if (err) {
                callback(new Error('Upps... Algo ha salido horrible'), null);
              } else {
                try {
                  user.password = hash;
                  let udb = await User.create(user)
                  if (udb) {
                    const type = parseInt(udb.type);
                    switch (type) {
                      case 1:
                        try {
                          await Client.create({
                            User: udb.ID
                          });
                          callback(null, udb);
                        } catch (e3) {
                          try {
                            await User.destroy({
                              where: {
                                User: udb.ID
                              }
                            });
                            callback(e3, null);
                          } catch (e4) {
                            callback(e4, null);
                          }
                        }
                        break;
                      case 2:
                        try {
                          await Manager.create({
                            User: udb.ID
                          });
                          callback(null, udb);
                        } catch (e3) {
                          try {
                            await User.destroy({
                              where: {
                                User: udb.ID
                              }
                            });
                            callback(e3, null);
                          } catch (e4) {
                            callback(e4, null);
                          }
                        }
                        break;
                      case 3:
                        try {
                          await Mechanic.create({
                            User: udb.ID
                          });
                          callback(null, udb);
                        } catch (e3) {
                          try {
                            await User.destroy({
                              where: {
                                User: udb.ID
                              }
                            });
                            callback(e3, null);
                          } catch (e4) {
                            callback(e4, null);
                          }
                        }
                        break;
                      case 4:
                        try {
                          Administrator.create({
                            User: udb.ID
                          });
                          callback(null, udb);
                        } catch (e3) {
                          try {
                            await User.destroy({
                              where: {
                                User: udb.ID
                              }
                            });
                            callback(e3, null);
                          } catch (e4) {
                            callback(e4, null);
                          }
                        }
                        break;
                      default:
                        callback(new Error('OH MI GOSH... QUE PASO'), null);
                    }
                  } else {
                    callback(new Error('Hemos tenido un problema para registrar ese usuario'), null);
                  }
                } catch (e2) {
                  callback(e2, null);
                }
              }
            });
          }
        });
      }
    } catch (e) {
      callback(e, null);
    }
  },
  comparePassword: function (password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
      if (err) callback(err, null);
      callback(null, isMatch);
    });
  },
  searchClient: async function (userID, callback) {
    try {
      let c = await Client.findOne({
        where: {
          UserID: userID
        }
      });
      if (c) callback(null, c);
      callback(new Error('No hemos encontrado un Usuario de este tipo'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchManager: async function (userID, callback) {
    try {
      let m = Manager.findOne({
        where: {
          UserID: userID
        }
      });
      if (m) callback(null, m);
      callback(new Error('No hemos encontrado a ningun usuario de este tipo'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchMechanic: async function (userID, callback) {
    try {
      let m = await Mechanic.findOne({
        where: {
          UserID: userID
        }
      });
      if (m) callback(null, m);
      callback(new Error('No hemos encontrado a ningun usuario de este tipo'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchAdministrator: async function (userID, callback) {
    try {
      let a = await Administrator.findOne({
        where: {
          UserID: userID
        }
      });
      if (a) callback(null, a);
      callback(new Error('No hemos encontrado a ningun usuario de este tipo'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  getAllWorkers: async function (callback) {
    try {
      let workers = await User.findAll({
        where: {
          [Op.or]: [{
            type: 2
          }, {
            type: 3
          }, {
            type: 4
          }]
        }
      });
      if (workers) callback(null, workers);
      callback(new Error('No tuvimos exito en la busqueda'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchUser: async function (userID, callback) {
    try {
      let user = await User.findOne({
        where: {
          ID: userID,
          [Op.or]: [{
            type: 2
          }, {
            type: 3
          }, {
            type: 4
          }]
        }
      });
      if (user) callback(null, user);
      callback(new Error('No tuvimos exito'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchUserByNationalID: async function (nationalID, callback) {
    try {
      let users = await User.findAll({
        where: {
          nationalID: {
            [Op.like]: '%' + nationalID + '%'
          },
          [Op.or]: [{
            type: 2
          }, {
            type: 3
          }, {
            type: 4
          }]
        }
      })
      if (users) callback(null, users);
      callback(new Error('NO tuvimos exito'), null);
    } catch (e) {

    }
  },
  searchUserByUsername: async function (username, callback) {
    try {
      let users = await User.findAll({
        where: {
          username: {
            [Op.like]: '%' + username + '%'
          },
          [Op.or]: [{
            type: 2
          }, {
            type: 3
          }, {
            type: 4
          }]
        }
      });
      if (users) callback(null, users);
      callback(new Error('No tuvimos exito'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchUserByName: async function (name, callback) {
    try {
      let users = await User.findAll({
        where: {
          type: {
            [Op.or]: [2, 3, 4]
          },
          [Op.or]: [{
              firstName: {
                [Op.like]: '%' + name + '%'
              }
            },
            {
              lastName: {
                [Op.like]: '%' + name + '%'
              }
            }
          ]
        }
      })
      if (users) callback(null, users);
      callback(new Error('No tuvimos exito'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  searchUserByEmail: async function (email, callback) {
    try {
      let users = await User.findAll({
        where: {
          email: {
            [Op.like]: '%' + email + '%'
          },
          [Op.or]: [{
            type: 2
          }, {
            type: 3
          }, {
            type: 4
          }]
        }
      });
      if (users) callback(null, users);
      callback(new Error('NO tuvimos exito'), null);
    } catch (e) {
      callback(e, null);
    }
  },
  modifyData: async function (user, callback) {
    try {
      let u = await User.findOne({
        where: {
          ID: user.ID
        }
      });
      if (u) {
        try {
          await u.update({
            nationalID: user.nationalID,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            addressLine1: user.addressLine1,
            addressLine2: user.addressLine2,
            city: user.city,
            type: user.type
          });
        } catch (e2) {
          callback(e2, null);
        }
        callback(null, u);
      } else {
        callback(new Error('Que Dios proteja el servidor porque no sabemos que estamos haciendo'), null);
      }
    } catch (e) {
      callback(e, null)
    }
  }
};

module.exports = UserController;
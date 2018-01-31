const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Usuario = sequelize.define('Usuario', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cedula: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: true
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  aptoCasa: {
    type: Sequelize.STRING,
    allowNull: true
  },
  calle: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ciudad: {
    type: Sequelize.STRING,
    allowNull: true
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Usuario;

module.exports.addUser = function(user, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { console.error(err); }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { console.error(err) }
      user.password = hash;
      Usuario.create(user).then((user) => {console.log(user)});    
    });
  });
};  
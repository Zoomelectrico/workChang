const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Usuario = sequelize.define('Usuario', {
  ID: {
    type: Sequelize.INT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cedula: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
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
const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Respuesto = sequelize.define('Repuesto', {
  ID: {
    type: Sequelize.INT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  numeroParte: {
    type: Sequelize.INT,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  existencia: {
    type: Sequelize.INT,
    allowNull: false,
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Respuesto;

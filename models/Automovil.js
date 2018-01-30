const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Automovil = sequelize.define('Automovil', {
  ID: {
    type: Sequelize.INT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  serial: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  placa: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  marca: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  anio: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Duenio: {
    type: Sequelize.INT,
    references: {
      model: Cliente,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Automovil;
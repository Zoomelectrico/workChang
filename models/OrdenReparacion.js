const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const OrdenReparacion = sequelize.define('OrdenReparacion', {
  ID: {
    type: Sequelize.INT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fechaEntrada: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  fechaSalida: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  Cita_ID: {
    type: Sequelize.INT,
    references: {
      model: Cita,
      key: 'ID',
    }
  },
  Mecanico_ID:{
    type: Sequelize.INT,
    references: {
      model: Mecanico,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = OrdenReparacion;
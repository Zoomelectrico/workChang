const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const RepairOrder = sequelize.define('repairorders', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  entryDate: {
    type: Sequelize.DATEONLY, 
    allowNull: false
  },
  exitDate: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  MechanicID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  AppointmentID: {
    type: Sequelize.INTEGER,
    allowNull: false 
  }, 
  diagnostic: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  QRCode: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  ready: {
    type: Sequelize.TINYINT,
    allowNull: false
  }
}, { timestamps: false, freezeTableName: true });

module.exports = RepairOrder;
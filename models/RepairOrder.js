const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const RepairOrder = sequelize.define('RepairOrders', {
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
  details: {
    type: Sequelize.TEXT,
    allowNull: true
  }, 
  diagnostic: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  ready: {
    type: Sequelize.TINYINT,
    allowNull: false
  }
}, { timestamps: false, freezeTableName: true });

module.exports = RepairOrder;
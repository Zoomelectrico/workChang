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
  Appointment: {
    type: Sequelize.INTEGER,
    references: {
      model: Appointment,
      key: 'ID',
    }
  },
  Mechanic:{
    type: Sequelize.INTEGER,
    references: {
      model: Mechanic,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = RepairOrder;
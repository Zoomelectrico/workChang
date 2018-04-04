const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Appointment = sequelize.define('appointments', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  checkout: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CarID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Appointment;
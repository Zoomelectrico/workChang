const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Appointment = sequelize.define('Appointments', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Car: {
    type: Sequelize.INTEGER,
    references: {
      model: Car,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Appointment;
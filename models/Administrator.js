const Sequelize = require('sequelize');
const dbconfig = require('../config/database');
const sequelize = dbconfig;

const Administrator = sequelize.define('administrators', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Administrator;
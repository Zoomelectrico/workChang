const Sequelize = require('sequelize');
const dbconfig = require('../config/database');
const Users = require('./User');
const sequelize = dbconfig;

const Administrator = sequelize.define('Administrators', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  User: {
    type: Sequelize.INTEGER,
    references: {
      model: Users,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Administrator;
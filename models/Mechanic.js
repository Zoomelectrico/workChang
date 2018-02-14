const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Mechanic = sequelize.define('Mechanics', {
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

module.exports = Mechanic;
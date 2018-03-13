const Sequelize = require('sequelize');
const dbconfig = require('../config/database');
const sequelize = dbconfig;

const RepairsReplacement = sequelize.define('RepairsReplacements', {
  RepairOrder: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  }, 
  Replacement : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  }
}, { timestamps: false, freezeTableName: true });

RepairsReplacement.removeAttribute('id');

module.exports = RepairsReplacement;
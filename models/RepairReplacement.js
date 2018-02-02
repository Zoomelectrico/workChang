const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const RepairReplacement = sequelize.define('RepairsReplacements', {
  RepairOrder: {
    type: Sequelize.INTEGER,
    references: {
      model: RepairOrder,
      key: 'ID',
    }
  },
  Replacement: {
    type: Sequelize.INTEGER,
    references: {
      model: Replacement,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = RepairReplacement;

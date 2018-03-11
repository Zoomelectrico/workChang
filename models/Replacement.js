const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Replacement = sequelize.define('replacements', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  partNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  inStock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }/**,
  forModel: {
    type: Sequelize.STRING,
    allowNull:false
  }**/
}, { timestamps: false, freezeTableName: true });


module.exports = Replacement;

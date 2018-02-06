const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Car = sequelize.define('Cars', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  serial: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  licensePlate: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  Owner: {
    type: Sequelize.INTEGER,
    references: {
      model: Client,
      key: 'ID'
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Car;
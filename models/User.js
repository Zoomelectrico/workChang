const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const User = sequelize.define('Users', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nationalID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  addressLine1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  addressLine2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, { timestamps: false, freezeTableName: true });

module.exports = User;

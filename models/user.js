const Sequelize = require('sequelize');
const bcrypt =  requier('bcryptjs');
const dbconfig = require('./config/database');

const sequelize = dbconfig;

const User = sequelize.define('user', {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cedula: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = User;
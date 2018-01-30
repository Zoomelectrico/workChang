const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Gerente = sequelize.define('Gerente', {
  ID: {
    type: Sequelize.INT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Usuario_ID: {
    type: Sequelize.INT,
    references: {
      model: Usuario,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Gerente;
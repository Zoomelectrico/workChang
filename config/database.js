var Sequelize = require('sequelize');

module.exports = new Sequelize('workchang', 'root', 'Paty1998', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
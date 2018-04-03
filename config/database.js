var Sequelize = require('sequelize');

module.exports = new Sequelize('workchang', 'root', '3364', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
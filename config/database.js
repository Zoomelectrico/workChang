var Sequelize = require('sequelize');

module.exports = new Sequelize('workchang', 'root', '1234Germano1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
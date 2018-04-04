var Sequelize = require('sequelize');
module.exports = new Sequelize(`heroku_87c246b2e5f03fc`, 'bbf3ddab2be9bf', 'c71db1c8', {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
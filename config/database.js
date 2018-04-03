var Sequelize = require('sequelize');

<<<<<<< HEAD
module.exports = new Sequelize('workchang', 'root', '3364', {
=======
module.exports = new Sequelize('workchang', 'root', 'Germano1', {
>>>>>>> cefa9d75ed9495a9afef5d47792ceac814402c75
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
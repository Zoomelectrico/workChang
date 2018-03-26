const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const photoDetailRO = sequelize.define('photoDetailRO', {
	ID: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	photoURL: {
		type: Sequelize.STRING,
		allowNull: true
	},
	repairOrdersID: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}, { timestamps: false, freezeTableName: true });

module.exports = photoDetailRO;
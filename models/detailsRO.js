const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const detailsRO = sequelize.define('detailsRO', {
	ID: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	photoURL: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	details: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	repairorderID: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}, { timestamps: false, freezeTableName: true });

module.exports = detailsRO;
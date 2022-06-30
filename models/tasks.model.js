const { DataTypes } = require("sequelize");

const db = require('../data/database');

const sequelize = db.sequelize;

const Tasks = sequelize.define('Tasks', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	}
});

module.exports = Tasks;
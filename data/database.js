const mariadb = require("mariadb");
const { Sequelize } = require("sequelize");

const config = require("../config/config");

module.exports = db = {};

// create db if it doesn't already exist
const { host, port, user, password, database } = config.database;

// Create a connection pool
const pool = mariadb.createPool({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database,
});
pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

// connect to db
const sequelize = new Sequelize(database, user, password, {
	dialect: 'mariadb',
	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle
	}
}
);

db.sequelize = sequelize;

// init the Task model and add it to the exported db object
db.Tasks = require('../models/tasks.model');

// sync all models with database
sequelize.sync({ alter: true });

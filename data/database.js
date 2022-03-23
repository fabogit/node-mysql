// Use the MariaDB Node.js Connector
const mariadb = require("mariadb");

// Create a connection pool
const pool = mariadb.createPool({
  host: "localhost" || process.env.DB_HOST,
  port: 3306,
  user: "root" || process.env.DB_USER,
  password: "mysql" || process.env.DB_PASSWORD,
  database: "todo",
});

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool,
});


/* 

// mysql2 node driver
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "todo",
  user: "root",
  password: "mysql",
});

module.exports = pool;

*/
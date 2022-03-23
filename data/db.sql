CREATE DATABASE todo;

-- table to store tasks
CREATE TABLE todo.tasks (id int AUTO_INCREMENT PRIMARY KEY, description varchar(200), completed boolean DEFAULT false);

-- create a new user that MariaDB Connector/Node.js can use to connect to and communicate with MariaDB database instance.
-- CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'Password123!';
-- GRANT ALL PRIVILEGES ON todo.* TO 'app_user'@'localhost';
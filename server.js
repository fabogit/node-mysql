const express = require('express');

require('dotenv').config();
const cors = require('cors');

const db = require('./data/database');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();

const sequelize = db.sequelize;
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(tasksRoutes);

sequelize.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

app.listen(port, () => console.log(`Listening on port ${port}`));

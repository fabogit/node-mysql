const express = require("express");

require('dotenv').config();

const tasksRoutes = require("./routes/tasks.routes");

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use(tasksRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));

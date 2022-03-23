const express = require("express");
const tasksRoutes = require("./routes/tasks");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(tasksRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));

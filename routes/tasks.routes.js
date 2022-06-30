const express = require("express");

const { getTasks, updateTask, createTask, deleteTask } = require("../controllers/task.controler");

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;

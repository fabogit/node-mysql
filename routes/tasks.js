const express = require("express");

const db = require("../data/database");
const router = express.Router();

// GET
router.get("/tasks", async (req, res) => {
  try {
    const result = await db.pool.query("SELECT * FROM tasks");
    res.status(200).send(result);
  } catch (err) {
    throw err;
  }
});

// POST
router.post("/tasks", async (req, res) => {
  const task = req.body;
  try {
    const result = await db.pool.query(
      "INSERT INTO tasks (description) VALUES (?)",
      [task.description]
    );
    res.status(201).send(result);
  } catch (err) {
    throw err;
  }
});

router.put("/tasks/:id", async (req, res) => {
  const id = req.params.id
  const task = req.body;
  try {
    const result = await db.pool.query(
      "UPDATE tasks SET description = ?, completed = ? WHERE id = ?",
      [task.description, task.completed, id]
    );
    res.status(200).send(result);
  } catch (err) {
    throw err;
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.status(204).send(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;

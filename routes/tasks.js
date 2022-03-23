const express = require("express");

const db = require("../data/database");
const router = express.Router();

// GET
router.get("/tasks", async (req, res) => {
  try {
    const result = await db.pool.query("SELECT * FROM tasks");
    res.send(result);
  } catch (err) {
    throw err;
  }
});

// POST
router.post("/tasks", async (req, res) => {
  let task = req.body;
  try {
    const result = await db.pool.query(
      "INSERT INTO tasks (description) VALUES (?)",
      [task.description]
    );
    res.send(result);
  } catch (err) {
    throw err;
  }
});

router.put("/tasks", async (req, res) => {
  let task = req.body;
  try {
    const result = await db.pool.query(
      "UPDATE tasks SET description = ?, completed = ? WHERE id = ?",
      [task.description, task.completed, task.id]
    );
    res.send(result);
  } catch (err) {
    throw err;
  }
});

router.delete("/tasks", async (req, res) => {
  let id = req.query.id;
  try {
    const result = await db.pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;

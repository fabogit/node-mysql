const express = require("express");

const db = require("../data/database");
const router = express.Router();

// GET
router.get("/tasks", async (req, res) => {
  try {
    const result = await db.pool.query("select * from tasks");
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
      "insert into tasks (description) values (?)",
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
      "update tasks set description = ?, completed = ? where id = ?",
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
    const result = await db.pool.query("delete from tasks where id = ?", [id]);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;

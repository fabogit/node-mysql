const db = require("../data/database");

const getTasks = async (req, res) => {
	try {
		const result = await db.pool.query("SELECT * FROM tasks");
		return res.status(200).send(result);
	} catch (err) {
		throw err;
	}
};

const createTask = async (req, res) => {
	const task = req.body;
	try {
		const result = await db.pool.query(
			"INSERT INTO tasks (description) VALUES (?)",
			[task.description]
		);
		return res.status(201).send(result);
	} catch (err) {
		throw err;
	}
};

const updateTask = async (req, res) => {
	const id = req.params.id;
	const task = req.body;
	try {
		const result = await db.pool.query(
			"UPDATE tasks SET description = ?, completed = ? WHERE id = ?",
			[task.description, task.completed, id]
		);
		return res.status(200).send(result);
	} catch (err) {
		throw err;
	}
};

const deleteTask = async (req, res) => {
	const id = req.params.id;
	try {
		const result = await db.pool.query("DELETE FROM tasks WHERE id = ?", [id]);
		return res.status(204).send(result);
	} catch (err) {
		throw err;
	}
};

module.exports = {
	getTasks,
	createTask,
	updateTask,
	deleteTask
};

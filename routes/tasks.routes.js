const express = require('express');

const { insertTask, updateTask, getOneTask, getAllTasks, deleteTask } = require('../controllers/tasks.controler');

const router = express.Router();

router.get('/tasks', async (req, res, next) => {
	try {
		const tasks = await getAllTasks();
		res.status(200).json({ data: tasks });
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

router.get('/tasks/:taskId', async (req, res) => {
	try {
		const task = await getOneTask(req.params.taskId);
		res.status(200).json({ data: task });
	} catch (e) {
		console.log(e);
		res.sendStatus(404);
	}
});

router.post('/tasks', async (req, res) => {
	try {
		const description = req.body.description;
		const completed = req.body.completed;

		if (!description || !completed) {
			return res.sendStatus(400);
		}
		const task = await insertTask(description, completed)
			.then(() => res.json({ message: 'task created.' }));
	} catch (e) {
		console.log(e);
		res.sendStatus(400);
	}
});

router.put('/:taskId', async (req, res, next) => {
	try {
		const description = req.body.description;
		const completed = req.body.completed;
		const taskId = req.params.taskId;

		if (!description || !completed || !taskId) {
			return res.sendStatus(400);
		}
		const task = await updateTask(description, completed, taskId).then(() => { return getOneTask(taskId); });
		res.json({ data: task });
	} catch (e) {
		console.log(e);
		res.sendStatus(400);
	}
});

router.delete('/:taskId', async (req, res, next) => {
	try {
		const taskId = req.params.taskId;
		const response = await deleteTask(taskId);
		return res.sendStatus(204);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
const db = require('../data/database');

const Tasks = db.Tasks;

async function insertTask(description, completed) {
	await Tasks.create({ description, completed });
}

async function updateTask(description, completed, id) {
	await Tasks.update({ description, completed }, { where: { id: id } });
}

async function getOneTask(id) {
	const task = await Tasks.findByPk(id);
	return task;
}

async function getAllTasks() {
	const tasks = await Tasks.findAll();
	return tasks;
}

async function deleteTask(id) {
	const task = await getOneTask(id);
	await task.destroy();
}

module.exports = {
	insertTask,
	updateTask,
	getOneTask,
	getAllTasks,
	deleteTask
};

import Task from '../models/Task';

class TaskController {

	readAll(req, res) {

		const token = req.headers.authorization || '';
		const currentUserId = req.params.id || '';

		Task.readAllTasks(token, currentUserId)
			.then((tasks) => {

				res.status(200).send(tasks);
				
			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});
		
	}

	readByStatus(req, res) {

		const token = req.headers.authorization || '';
		const currentUserId = req.params.id || '';
		const taskStatus = req.params.status || '';

		Task.readTasksByStatus(token, currentUserId, taskStatus)
			.then((tasks) => {

				res.status(200).send(tasks);

			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});
		
	}

	new(req, res) {

		const token = req.headers.authorization || '';
		const currentUserId = req.params.id || '';
		const task = req.body.task;
		
		Task.newTask(token, currentUserId, task)
			.then((task) => {

				res.status(200).send(task);

			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});

	}

	update(req, res) {

		const token = req.headers.authorization || '';
		const currentUserId = req.params.id || '';
		const task = req.body.task;
		const taskId = req.params.taskId;

		Task.updateTask(token, currentUserId, task, taskId)
			.then(() => {

				res.status(200).send({ message: 'Task updated' });

			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});
	
	}

	delete(req, res) {

		const token = req.headers.authorization || '';
		const currentUserId = req.params.id || '';
		const taskId = req.params.taskId;

		Task.deleteTask(token, currentUserId, taskId)
			.then(() => {

				res.status(200).send({ message: 'Task deleted' });

			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});
		
	}
	
	changeStatus(req, res) {

		const token = req.headers.authorization || '';
		const currentUserId = req.params.id || '';
		const taskId = req.params.taskId;

		Task.changeTaskStatus(token, currentUserId, taskId)
			.then(() => {

				res.status(200).send({ message: 'Status change' });

			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});
		
	}

}

export default new TaskController();

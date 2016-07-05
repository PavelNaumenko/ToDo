import dbDriver from '../drivers/dbDriver';
import User from './User';

const myDriver = new dbDriver('taskModel');

class Task {

	readAllTasks(token, currentUserId) {

		return new Promise((resolve, reject) => {

			User.isAuthorized(token, currentUserId)
				.then((result) => {

					if (result.answer) {

						myDriver.readByCriteria({ userId: result.userId })
							.then((tasks) => {

								resolve(tasks);

							})
							.catch((err) => {

								reject({ err, status: 400 });

							});

					} else {

						reject({ err: result.err, status: 401 });

					}

				});


		});
		
	}

	readTasksByStatus(token, currentUserId, taskStatus) {

		return new Promise((resolve, reject) => {

			User.isAuthorized(token, currentUserId)
				.then((result) => {

					if (result.answer) {

						myDriver.readByCriteria({ userId: result.userId, status: taskStatus })
							.then((tasks) => {

								resolve(tasks);

							})
							.catch((err) => {

								reject({ err, status: 400 });

							});

					} else {

						reject({ err: result.err, status: 401 });

					}

				});


		});

	}

	newTask(token, currentUserId, task) {

		return new Promise((resolve, reject) => {

			User.isAuthorized(token, currentUserId)
				.then((result) => {

					if (result.answer) {

						task.startDate = new Date();
						task.userId = result.userId;

						myDriver.createField(task)
							.then((task) => {

								resolve(task);

							})
							.catch((err) => {

								reject({ err, status: 400 });

							});
						
					} else {

						reject({ err: result.err, status: 401 });

					}

				});


		});

	}

	updateTask(token, currentUserId, task, taskId) {

		return new Promise((resolve, reject) => {
				
			User.isAuthorized(token, currentUserId)
				.then((result) => {

					if (result.answer) {

						myDriver.updateField(taskId, task)
							.then(() => {

								resolve();

							})
							.catch((err) => {

								reject({ err, status: 400 });

							});

					} else {

						reject({ err: result.err, status: 401 });

					}

				});


		});

	}

	deleteTask(token, currentUserId, taskId) {

		return new Promise((resolve, reject) => {

			User.isAuthorized(token, currentUserId)
				.then((result) => {

					if (result.answer) {

						myDriver.deleteField(taskId)
							.then(() => {

								resolve();

							})
							.catch((err) => {

								reject({ err, status: 400 });

							});

					} else {

						reject({ err: result.err, status: 401 });

					}

				});


		});

	}

	changeTaskStatus(token, currentUserId, taskId) {

		return new Promise((resolve, reject) => {

			User.isAuthorized(token, currentUserId)
				.then((result) => {

					if (result.answer) {

						myDriver.readByCriteria({ _id: taskId })
							.then((task) => {

								if (task[0].status === 'active') {

									myDriver.updateField(taskId,
										{ complitedDate: new Date(), status: 'complited' })
										.then(() => {

											resolve();

										})
										.catch((err) => {

											reject({ err, status: 400 });

										});


								} else if (task[0].status === 'complited') {

									myDriver.updateField(taskId,
										{ complitedDate: '', status: 'active' })
										.then(() => {

											resolve();

										})
										.catch((err) => {

											reject({ err, status: 400 });

										});

								}


							})
							.catch((err) => {

								reject({ err, status: 400 });

							});

					} else {

						reject({ err: result.err, status: 401 });

					}

				});


		});

	}
	
}

export default new Task();

import UserModel from '../shemas/User';
import TaskModel from '../shemas/Task';

export default class dbDriver {

	constructor(model) {

		switch (model) {

			case 'userModel':
				this.model = UserModel;
				break;
			
			case 'taskModel':
				this.model = TaskModel;
				break;
			
			default:
				console.log('Incorrect model!');
				

		}

	}

	readAll() {

		return new Promise((resolve, reject) => {

			this.model.find((err, data) => {

				(err) ? reject(err) : resolve(data);

			}).sort({ login: 'asc' });

		});

	}
	
	readByCriteria(criteria) {

		return new Promise((resolve, reject) => {

			this.model.find(criteria, (err, user) => {

				(err) ? reject(err) : resolve(user);

			});

		});

	}

	createField(data) {

		return new Promise((resolve, reject) => {


			if (data !== '') {

				this.model.create(data, (err, data) => {

					(err) ? reject({ message: 'field already exist' }) : resolve(data);

				});

			} else {

				reject({ message: 'empty data' });

			}

		});

	}

	updateField(_id, data) {

		return new Promise((resolve, reject) => {

			if (data !== '') {

				this.model.findOneAndUpdate(_id, data, (err) => {

					(err) ? reject(err) : resolve();

				});

			} else {

				reject('Try to update user with empty params');

			}

		});

	}

	deleteField(_id) {

		return new Promise((resolve, reject) => {

			this.model.findOneAndRemove({ _id }, (err) => {

				(err) ? reject(err) : resolve();

			});

		});

	}

}

import UserModel from './User';

export default {

	getAllUsers() {

		return new Promise((resolve, reject) => {

			UserModel.find((err, users) => {

				(err) ? reject(err) : resolve(users);

			});

		});

	},

	getOneUser(id) {

		return new Promise((resolve, reject) => {

			UserModel.find({ id }, (err, user) => {

				(err) ? reject(err) : resolve(user);

			});

		});

	},

	createNewUser(data) {

		return new Promise((resolve, reject) => {

			UserModel.create(data, (err, user) => {

				(err) ? reject(err) : resolve(user);

			});

		});

	},

	updateUser(id, data) {

		return new Promise((resolve, reject) => {

			UserModel.findOneAndUpdate({ id }, data, (err) => {

				(err) ? reject(err) : resolve();

			});

		});

	},

	deleteUser(id) {

		return new Promise((resolve, reject) => {

			UserModel.findOneAndRemove({ id }, (err) => {

				(err) ? reject(err) : resolve();

			});

		});

	}

};
import UserModel from '../models/User';

export default class User {

	static index(req, res) {
		
		return new Promise((resolve, reject) => {

			UserModel.find((err, users) => {

				(err) ? reject(err) : resolve(users);

			});

		});

	}

	static show(req) {

		return new Promise((resolve, reject) => {

			const id = req.params.id;

			UserModel.find({ id }, (err, user) => {

				(err) ? reject(err) : resolve(user);

			});

		});

	}

	static create(req) {

		return new Promise((resolve, reject) => {

			const data = req.body.user || '';

			if (data !== '') {

				UserModel.create(data, (err, user) => {

					(err) ? reject(err) : resolve(user);

				});

			} else {

				reject('Try to create empty user');

			}

		});

	}

	static update(req) {

		return new Promise((resolve, reject) => {

			const id = req.params.id || '';
			const data = req.body.user || '';

			if (data !== '') {

				UserModel.findOneAndUpdate({ id }, data, (err) => {

					(err) ? reject(err) : resolve();

				});

			} else {

				reject('Try to update user with empty params');

			}

		});

	}

	static delete(req) {

		return new Promise((resolve, reject) => {

			const id = req.params.id;

			UserModel.findOneAndRemove({ id }, (err) => {

				(err) ? reject(err) : resolve();

			});

		});

	}

};

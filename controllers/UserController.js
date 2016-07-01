import UserModel from '../shemas/User';
import User from '../models/User';
import dbDriver from '../drivers/dbDriver';

class UserController {

	index(req, res) {

		dbDriver.readAll(UserModel)
			.then((users) => {

				console.log('Все пользователи, полученые через GET: ' + users);
				res.status(200).send({ users });

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send({ message: 'can not read data from db '  });

			});

	}

	show(req, res) {

		const token = req.headers.authorization || '';
		const id = req.params.id || '';

		User.readUser(token, id)
			.then((user) => {

				console.log(user);
				console.log('Пользователь, полученый через GET: ' + user[0].login);
				res.status(200).send(user.login);

			})
			.catch((err, status) => {

				console.log(err);
				res.status(status).send({ message: err });

			});

	}

	create(req, res) {

		let user = req.body.user || '';

		User.create(user)
			.then((user) => {

				console.log('Созданный пользователь: ' + user);

				res.status(200).json({

					token: user.token,
					expired: user.expired

				});

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send(err);

			});

	}

	update(req, res) {

		const id = req.params.id || '';
		const user = req.body.user || '';
		
		dbDriver.updateField(UserModel, id, user)
			.then(() => {

				console.log('Пользователь обновлен!');
				res.status(200);

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send({ message: 'can not update data'  });


			});

	}

	delete(req, res) {

		const id = req.params.id;

		dbDriver.deleteField(UserModel, id)
			.then(() => {

				console.log('Пользователь удален!');
				res.status(200);

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send({ message: 'can not delete data'  });

			});

	}

}

export default new UserController();

import UserModel from '../models/User';
import dbDriver from '../drivers/dbDriver';

class User {

	index(req, res) {

		dbDriver.findAll(UserModel)
			.then((users) => {

				console.log('Все пользователи, полученые через GET: ' + users);
				res.status(200).send({ users });

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send({message: 'bad record to db'});

			});

	}

	show(req, res) {

		const id = req.params.id;
		
		dbDriver.findOne(UserModel, id)
			.then((user) => {

				console.log('Пользователь, полученый через GET: ' + user);
				res.send({ user });

			})
			.catch((err) => {

				console.log(err);

			});

	}

	create(req, res) {

		const user = req.body.user || '';
		
		dbDriver.createField(UserModel, user)
			.then((user) => {

				console.log('Новый пользователь добавлен: ' + user);
				res.send({ user });

			})
			.catch((err) => {

				console.log(err);

			});

	}

	update(req, res) {

		const id = req.params.id || '';
		const user = req.body.user || '';
		
		dbDriver.updateField(UserModel, id, user)
			.then(() => {

				console.log('Пользователь обновлен!');

			})
			.catch((err) => {

				console.log(err);

			});

	}

	delete(req, res) {

		const id = req.params.id;

		dbDriver.deleteField(UserModel, id)
			.then(() => {

				console.log('Пользователь удален!');

			})
			.catch((err) => {

				console.log(err);

			});

	}

}

export default new User();

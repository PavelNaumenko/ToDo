import UserModel from '../models/User';
import dbDriver from '../drivers/dbDriver';

class User {

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

		const id = req.params.id;
		
		dbDriver.readOne(UserModel, id)
			.then((user) => {

				console.log('Пользователь, полученый через GET: ' + user);
				res.status(200).send({ user });

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send({ message: 'can not read data from db '  });

			});

	}

	create(req, res) {

		const user = req.body.user || '';
		
		dbDriver.createField(UserModel, user)
			.then((user) => {

				console.log('Новый пользователь добавлен: ' + user);
				res.status(200).send({ user });

			})
			.catch((err) => {

				console.log(err);
				res.status(400).send({ message: 'can not create data'  });

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

export default new User();

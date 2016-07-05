import User from '../models/User';

class UserController {

	showAll(req, res) {

		const token = req.headers.authorization || '';

		User.readAllUser(token)
			.then((users) => {

				let logins = [];

				for (let i = 0; i < users.length; i++) {

					logins.push(users[i].login);

				}

				res.status(200).send(logins);

			})
			.catch((result) => {

				res.status(result.status).send({ message: result.err });

			});

	}

	showOne(req, res) {

		const token = req.headers.authorization || '';
		const id = req.params.id || '';

		User.readUser(token, id)
			.then((user) => {
				
				console.log('Пользователь, полученый через GET: ' + user[0].login);
				res.status(200).send({ message: user[0].login });

			})
			.catch((result) => {

				console.log(result.err);
				res.status(result.status).send({ message: result.err });

			});

	}

	create(req, res) {

		let user = req.body.user || '';

		User.create(user)
			.then((user) => {

				res.status(200).json({

					token: user.token,
					expired: user.expired

				});

			})
			.catch((result) => {

				console.log(result.err);
				res.status(result.status).send({ message: result.err });

			});

	}

	update(req, res) {

		const id = req.params.id || '';
		const user = req.body.user || '';
		const token = req.headers.authorization || '';

		User.updateUser(id, user, token)
			.then(() => {

				console.log('Пользователь обновлен!');
				res.status(200).send({ message: 'Пользователь обновлен!'  });

			})
			.catch((result) => {

				console.log(result.err);
				res.status(result.status).send({ message: result.err  });


			});

	}

	delete(req, res) {

		const id = req.params.id;
		const token = req.headers.authorization || '';

		User.deleteUser(id, token)
			.then(() => {

				console.log('Пользователь удален!');
				res.status(200).send({ message: 'Пользователь удален!'  });

			})
			.catch((result) => {

				console.log(result.err);
				res.status(result.status).send({ message: result.err  });

			});

	}
	
	logIn(req, res) {

		
		const login = req.body.login || '';
		const password = req.body.password || '';
		
		User.logIn(login, password)
			.then((token) => {

				console.log('Вход выполнен');
				res.status(200).json(token);

			})
			.catch((result) => {
				
				res.status(result.status).send({ message: result.err });
				
			});
		
	}

}

export default new UserController();

import dbDriver from '../drivers/dbDriver';
import UserModel from '../shemas/User';
import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

class User {

	isCorrectLength(field, min, max) {

		return !(field.length < min || field.length > max);
		
	}
	
	isUniqueField(field, value) {

		return new Promise((resolve, reject) => {

			let criteria = { };

			criteria[field] = value;

			dbDriver.readByCriteria(UserModel, criteria)
				.then((user) => {

					if (user.length == 0) {

						return resolve(true);

					} else {

						return resolve(false, user.expired);

					}

				})

				.catch((err) => {

					reject(err);

				});

		});

	}
	
	isEqualPasswords(password, confirmPassword) {

		return password === confirmPassword;

	}

	isValidUser(user) {

		return new Promise((resolve, reject) => {

			if (!this.isCorrectLength(user.login, 2, 15)) {

				return reject('Поле логин должно быть в диапазоне [2;15]');

			} else if (!this.isCorrectLength(user.password, 6, 20)) {

				return reject('Поле пароль должно быть в диапазоне [6;20]');

			} else if (!this.isEqualPasswords(user.password, user.confirm_password)) {

				return reject('Пароль не равен подтвержденному паролю');

			} else {

				this.isUniqueField('login', user.login)
					.then((answer) => {

						if (!answer) {

							return reject('Пользователь с даным логином уже существует!');

						} else {

							return resolve();

						}

					});

			}

		});

	}

	create(user) {

		return new Promise((resolve, reject) => {

			this.isValidUser(user)
				.then(() => {

					this.createToken(user);
					this.hashPassword(user);
					
					dbDriver.createField(UserModel, user)
						.then((user) => {

							resolve(user);

						})
						.catch((err) => {

							reject(err);

						});

				})
				.catch((err) => {
					
					reject(err);

				});

		});

	}

	createToken(user) {

		let token = jwt.sign(user.login, 'pashka_super_secret');
		let expired = Date.now() + 24 * 60 * 60 * 1000;

		user.token = token;
		user.expired = expired;

	}

	hashPassword(user) {

		user.password = passwordHash.generate(user.password);
		
	}
	
	isAuthorized(token) {

		return new Promise((resolve, reject) => {

			if (!token) {

				console.log('Токен не передан');
				return resolve(false);

			} else {

				this.isUniqueField('token', token)
					.then((answer, expired) => {

						if (answer) {

							console.log('Токен не найден в БД');
							return resolve(false);

						} else if (Date.now() > expired) {

							console.log('Время истекло');
							return resolve(false);

						} else {

							console.log('Hello');
							return resolve(true);

						}

					})
					.catch((err) => {

						reject(err);

					});

			}

		});
		
	}
	
	readUser(token, id) {

		return new Promise((resolve, reject) => {

			this.isAuthorized(token)
				.then((answer) => {

					if (answer) {

						dbDriver.readByCriteria(UserModel, { _id: +(id) })
							.then((user) => {

								console.log(user);
								resolve(user);

							})
							.catch((err) => {

								reject(err, 400);

							});

					} else {

						reject('Вы не вошли в систему', 401);

					}

				});


		});
	
	}

}

export default new User();

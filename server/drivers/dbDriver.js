class dbDriver {

	readAll(model) {

		return new Promise((resolve, reject) => {

			model.find((err, data) => {

				(err) ? reject(err) : resolve(data);

			}).sort({ login: 'asc' });

		});

	}
	
	readByCriteria(model, criteria) {

		return new Promise((resolve, reject) => {

			model.find(criteria, (err, user) => {

				(err) ? reject(err) : resolve(user);

			});

		});

	}

	createField(model, data) {

		return new Promise((resolve, reject) => {


			if (data !== '') {

				model.create(data, (err, data) => {

					(err) ? reject({ message: 'user already exist' }) : resolve(data);

				});

			} else {

				reject({ message: 'empty data' });

			}

		});

	}

	updateField(model, _id, data) {

		return new Promise((resolve, reject) => {

			if (data !== '') {
                
				model.findOneAndUpdate({ _id }, data, (err) => {

					(err) ? reject(err) : resolve();

				});

			} else {

				reject('Try to update user with empty params');

			}

		});

	}

	deleteField(model, _id) {

		return new Promise((resolve, reject) => {

			model.findOneAndRemove({ _id }, (err) => {

				(err) ? reject(err) : resolve();

			});

		});

	}

}

export default new dbDriver();

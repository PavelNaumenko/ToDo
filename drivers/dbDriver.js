class dbDriver {

	findAll(model) {

		return new Promise((resolve, reject) => {

			model.find((err, data) => {

				(err) ? reject(err) : resolve(data);

			});

		});

	}

	findOne(model, id) {

		return new Promise((resolve, reject) => {

			model.find({ id }, (err, user) => {

				(err) ? reject(err) : resolve(user);

			});

		});

	}

	createField(model, data) {

		return new Promise((resolve, reject) => {


			if (data !== '') {

				model.create(data, (err, data) => {

					(err) ? reject(err) : resolve(data);

				});

			} else {

				reject('Try to create empty field');

			}

		});

	}

	updateField(model, id, data) {

		return new Promise((resolve, reject) => {

			if (data !== '') {

				model.findOneAndUpdate({ id }, data, (err) => {

					(err) ? reject(err) : resolve();

				});

			} else {

				reject('Try to update user with empty params');

			}

		});

	}

	deleteField(model, id) {

		return new Promise((resolve, reject) => {

			model.findOneAndRemove({ id }, (err) => {

				(err) ? reject(err) : resolve();

			});

		});

	}

}

export default new dbDriver();

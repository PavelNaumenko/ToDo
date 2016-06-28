import UserController from '../controllers/User';

export default function createRouter(arr, router) {

	for (let i = 0; i < arr.length; i++) {
		
		let route = arr[i];

		router[route.method](route.url, route.action);

	}

	return router;
	
};

// middleware that is specific to this router
/*
router.use(function timeLog(req, res, next) {

	console.log('Time: ', Date.now());
	next();

});

let req = 5

router.get('/get_all', (req, res) => {

	provider.getAllUsers()
		.then((users) => {

			console.log('Все пользователи, полученые через GET: ' + users);
			res.send({ users });

		})
		.catch((err) => {

			console.log('err');

		});

});

router.get('/users/:id', (req, res) => {

	provider.getOneUser(req.params.id)
		.then((user) => {

			console.log('Пользователь, полученый через GET: ' + user);
			res.send({ user });

		})
		.catch((err) => {

			console.log('err');

		});

});

router.post('/new_user', (req, res) => {

	provider.createNewUser(req.body.user)
		.then((user) => {

			console.log('Новый пользователь добавлен: ' + user);
			res.send({ user });

		})
		.catch((err) => {

			console.log('err');

		});

});

router.put('/update/:id', (req, res) => {

	provider.updateUser(req.params.id, req.body.user)
		.then(() => {

			console.log('Пользователь обновлен!');

		})
		.catch((err) => {

			console.log('err');

		});

})

router.delete('/delete/:id', (req, res) => {

	provider.deleteUser(req.params.id)
		.then(() => {

			console.log('Пользователь удален!');

		})
		.catch((err) => {

			console.log('err');

		});

});

module.exports = router;

	*/
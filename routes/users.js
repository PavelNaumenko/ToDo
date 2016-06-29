import UserController from '../controllers/User';

export default [

	{

		url: '/users',
		action: UserController.index,
		method: 'get'

	},

	{

		url: '/user/:id',
		action: UserController.show,
		method: 'get'

	},

	{

		url: '/users/new',
		action: UserController.create,
		method: 'post'

	},

	{

		url: '/user/:id',
		action: UserController.update,
		method: 'put'

	},

	{

		url: '/user/:id',
		action: UserController.delete,
		method: 'delete'

	}

];


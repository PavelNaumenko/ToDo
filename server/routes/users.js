import UserController from '../controllers/UserController';

export default [

	{

		url: '/users',
		action: UserController.showAll,
		method: 'get'

	},

	{

		url: '/user/:id',
		action: UserController.showOne,
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

	},
	
	{
		
		url: '/user/login',
		action: UserController.logIn,
		method: 'post'
		
	}

];


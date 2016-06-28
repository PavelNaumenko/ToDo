import TaskController from '../controllers/Task';

export default [

	{

		url: '/users',
		action: TaskController.index,
		method: 'get'

	},

	{

		url: '/user/:id',
		action: TaskController.show,
		method: 'get'

	},

	{

		url: '/users/new',
		action: TaskController.create,
		method: 'post'

	},

	{

		url: '/user/:id',
		action: TaskController.update,
		method: 'put'

	},

	{

		url: '/user/:id',
		action: TaskController.delete,
		method: 'delete'

	}

];


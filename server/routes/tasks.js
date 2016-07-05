import TaskController from '../controllers/TaskController';

export default [

	{

		url: '/user/:id/tasks',
		action: TaskController.readAll,
		method: 'get'

	},

	{

		url: '/user/:id/tasks/:status',
		action: TaskController.readByStatus,
		method: 'get'

	},

	{

		url: '/user/:id/tasks/new',
		action: TaskController.new,
		method: 'post'

	},

	{

		url: '/user/:id/tasks/:taskId/update',
		action: TaskController.update,
		method: 'put'

	},

	{

		url: '/user/:id/tasks/:taskId/delete',
		action: TaskController.delete,
		method: 'delete'

	},
	
	{

		url: '/user/:id/tasks/:taskId/changeStatus',
		action: TaskController.changeStatus,
		method: 'put'
		
	}

];


import UserController from '../controllers/User';

export default [

    {

        'url': '/users',
        'action': 'index',
        'method': UserController.index

    },

    { '/user/:id': {

        'action': 'show',
        'method': 'get'

    }

    },

    { '/users/new': {

        'action': 'create',
        'method': 'post'

    }

    },

    { '/user/:id': {

        'action': 'update',
        'method': 'put'

    }

    },

    { '/user/:id': {

        'action': 'delete',
        'method': 'delete'

    }
    }

];


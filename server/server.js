import express from 'express';
import bodyParser from 'body-parser';
import router from '/Users/Superuser/Documents/Projects/ToDo/config/routes';
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

class Server {

	static start(port) {

		this.createServer(port);

	}

	static createServer(port) {

		app.listen(port, () => {

			console.log('Started on port ' + port);

		});

	}

}

Server.start(3000);
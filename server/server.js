import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import createRouter from '../routes/router';
import arr from '../routes/index';

let router = express.Router();

mongoose.connect('mongodb://localhost/test', (err) => {

	if (err) {

		console.log('Error: ' + err);

	} else {

		console.log('We are connect to DB');

	}

});

createRouter(arr, router);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => {

	console.log('Server start in port: 3000');

});

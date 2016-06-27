const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {

	console.log('we are connected!');

});

let userSchema = mongoose.Schema({

	id: Number,
	login: String,
	password: String

});

let UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
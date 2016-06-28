import mongoose from 'mongoose';

let userSchema = mongoose.Schema({

	id: Number,
	login: String,
	password: String

});

let UserModel;

export default UserModel = mongoose.model('user', userSchema);

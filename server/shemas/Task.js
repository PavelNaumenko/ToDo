import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

let taskSchema = mongoose.Schema({

	title: {

		type: String,
		default: ''

	},

	description: {

		type: String,
		default: ''

	},

	status: {

		type: String,
		default: 'active'

	},

	userId: {

		type: Number,
		default: 0

	},

	startDate: {

		type: Date,
		default: ''

	},

	complitedDate: {

		type: Date,
		default: ''

	}
	
}, { versionKey: false });

taskSchema.plugin(autoIncrement.plugin, 'task');

export default mongoose.model('task', taskSchema);

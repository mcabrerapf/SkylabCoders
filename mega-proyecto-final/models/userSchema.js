const mongoose = require('mongoose')

const collection = 'datos';

// Schema definition
const userSchema = mongoose.Schema({
	username: String,
	pass: String,
	name: String,
	instrument: [String],
	genre: [String],
	studies:[String],
	material:[String],
	local: String,
	teacherAvailable: String,
	band: [String],
	description: String,
	pic: String,
	email: String,
	phone: Number,
	audios: [String]
},
{ collection });

// Model definition
var user = mongoose.model('user', userSchema);

module.exports = user
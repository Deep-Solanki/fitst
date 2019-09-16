var mongoose = require('mongoose');

var email = mongoose.model('Email',{
	UserName: {
		Name:"Deep.................................",
		type: String
	},
	Email: {
		type: String,
		required: true,
		minlength: 10,
		trim: true
	}
});

module.exports = { email }
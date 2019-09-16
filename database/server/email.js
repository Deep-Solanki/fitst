var mongoose = require('mongoose');

var email = mongoose.model('Email',{
	UserName: {
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
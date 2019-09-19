const mongoose = require('mongoose');

let intern = mongoose.model('deep',{
	Name: {
		type: String,
		required: true,
		minlength: 1
	},
	id: {
		type: Number,
		minlength:2
	},
	something: {
		type: Boolean,
	},
	time: {
		type: Number
	}
});

module.exports = {intern}


// var email = mongoose.model('Email',{
// 	UserName: {
// 		Name:"Deep.................................",
// 		type: String
// 	},
// 	Email: {
// 		type: String,
// 		required: true,
// 		minlength: 10,
// 		trim: true
// 	}
// });

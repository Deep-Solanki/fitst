var mongoose = require('mongoose');

var intern = mongoose.model('Deep_Solanki',{
	Name: {
		type: String
	},
	id: {
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

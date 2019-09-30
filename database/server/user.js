const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
//////////////////////////////////////////////
let UserSchema = new mongoose.Schema({
	email:{
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true,
		validate:{
			validator: validator.isEmail, 
			message:'{value} is not valid email.'
			}
		},

	password:{
		type: String,
		required: true,
		minlength: 8
	},

	tokens:[{
		access:{
			type: String,
			required: true
		},
		token:{
			type: String,
			required: true
		}
	}]
});

UserSchema.methods.generateAuthToken = function(){
	let user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

	user.tokens = user.tokens.concat([{access, token}]);

	return user.save().then(() => {
		return token;
	});
};


let user = mongoose.model('users',UserSchema);

module.exports = { user }

// var mongoose = require('mongoose');

// var email = mongoose.model('Email',{
// 	UserName: {
// 		Name:"Deep...",
// 		type: String
// 	},
// 	Email: {
// 		type: String,
// 		required: true,
// 		minlength: 10,
// 		trim: true
// 	}
// });

// module.exports = { email }
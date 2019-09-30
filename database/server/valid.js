const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
//////////////////////////////////////////////
let userSchema = new mongoose.Schema({
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

userSchema.methods.generateAuthToken = () => {
	let user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(),access}, 'abc123').toString();

	user.tokens = user.tokens.concat([{access, token}]);

	user.save().then(() => {
		return token;
	});
};


let user = mongoose.model('users',userSchema);

module.exports = { user }
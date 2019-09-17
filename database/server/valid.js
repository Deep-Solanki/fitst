const mongoose = require('mongoose');
const validator = require('validator');
//////////////////////////////////////////////
let User = mongoose.model('validate',{
	email:{
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true,
		validate:{
			validator: validator.isEmail; 
			message:'{value} is not valid email.'
			}

	password:{
		type: String,
		required: true,
		minlength: 8
	}

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
	}
})
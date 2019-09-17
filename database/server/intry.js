
///Error solving test try...
const mongoose = require('mongoose');
/////////////////////////////////////////////////////////////////////////
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Newdata');
/////////////////////////////////////////////////////////////////////////
let intern = mongoose.model('first',{
	text: {
		type: String,
		required: true,
		minlength: 1,
		unique: true
	},
	id: {
		type: Number,
		minlength:2
	}
});


let int = new intern({
	text:'this is the second text'
});


int.save().then((res)=>{
	console.log('successful insertion' +(res));
},(err) => {
	console.log('can not connect' + err)
});
//module.exports = {intern}


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

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
//////////////////////////////////////////////
let {mongoose}= require('./mongoose');
let {intern} = require('./intern');
let {user} = require('./user')
let {email} = require('./email');
/////////////////////////////////////////////
let app = express();
//-------------------------------------------------//
app.use(bodyParser.json());

// let Welcome = (req,res,next) => {
// 	console.log('logging');
// 	req.requestTime = Date.now();
// 	console.log(req.requestTime);
// 	// res.send('Inside Welcome page')
// 	// res.send('something'
// 	next()
// }
// app.use(Welcome);

app.get('/',(req,res) => {
	res.send('Welcome Page')
});
//-------------------------------------------------//
app.post('/post',(req, res) => {
	let intern1 = new intern({
		Name: req.body.Name
	});

	intern1.save().then((doc) => {
		res.send(doc);
		}, (err) => {
			res.status(404).send(err);
		}
	)
});
app.get('/post',(req,res) => {
	intern.find().then((deeps) => {
		res.send({deeps})
	}).catch((err) => {
		res.status(404).send(err);
	});
});
//---------------------------------------------------//
app.post('/valid',(req,res) => {
	let body = _.pick(req.body, ['email','password']);
	let user1 = new user({
		email: req.body.email,
		password: req.body.password
	});

	user1.save().then(() => {
		//res.send(doc);
		return user1.generateAuthToken();
		//console.log(doc);
	}).then((token) => {
		res.header('x-auth', token).send(user1);
	}).catch((err) => {
		res.status(400).send(err);
	});
});
app.get('/valid',(req,res) => {
	user.find().then((user_data) => {
		res.send({user_data})
	},(err) => {
		res.status(404).send(err);
	})
})
//-----------------------------------------------------//
///////////////////////FIND///////////////////////////////////
app.get('/post/:id',(req,res) => {
	let id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send("id is invalid");
	}

	intern.findById(id).then((deeps) => {
		if(!deeps){
			return res.status(404).send('id not found in databse');
		}
		console.log({deeps});
		res.send({deeps});
		
	}).catch((err) => { 
		res.status(404).send('data error');
	});
});
///////////////////////////DELETE////////////////////////////////
app.delete('/post/:id',(req,res) => {
	let id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send("id is invalid");
	}

	intern.findByIdAndRemove(id).then((deeps) => {
		if(!deeps){
			return res.status(404).send('id not found in databse');
		}
		console.log({deeps});
		res.send({deeps});
		
	}).catch((err) => { 
		res.status(404).send('data error');
	});
});
//////////////////////UPDATE//////////////////////////
app.patch('/post/:id',(req,res) => {
	let id = req.params.id;
	let body = _.pick(req.body,['Name','id','something']);

	if(!ObjectID.isValid(id)){
		return res.status(404).send("id is invalid");
	}

	if(_.isBoolean(body.something) && body.something){
		body.time = new Date().getTime();
	}else{
		something = false;
		time = null;
	}
	intern.findByIdAndUpdate(id, {$set: body}, {new: true}).then((deeps) => {
		if(!deeps){
			return res.status(404).send('id not found in databse');
		}
		console.log({deeps});
		res.send({deeps});
		
	}).catch((err) => { 
		res.status(404).send('data error');
	});
});
//---------------------------------------------------------------------//
app.post('/user',(req,res) => {
	console.log('working');
	let body = _.pick(req.body,['email','password']);
		let user2 = new user({
			email: req.body.email,
			password: req.body.password
		});

	user2.save().then(() => {
		return user2.generateAuthToken();
		}).then((token) => {
			res.header('x-authent', token).send(user2);
		}).catch((err) => {
			res.status(404).send(err);
		});
	})
app.listen(3000, () => {
	console.log('Server started on port no. 3000')
});

// newIntern.save().then((res) => {
// 	console.log('Saved successfully : ' + res)
// 	console.log('---------------------*--------------------')
// 	console.log(`new Intern: ${newIntern}`);
// 	console.log('---------------------*--------------------')
// 	console.log(`Name: ${newIntern.Name}`);
// 	console.log('---------------------*--------------------')
// 	console.log(`Id: ${newIntern.id}`)
// 	console.log('---------------------*--------------------')
// }, (err) => {
// 	console.log('unable to save')
// })


///////1:54:76
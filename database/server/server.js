const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
//////////////////////////////////////////////
let {mongoose}= require('./mongoose');
let {intern} = require('./intern');

let {email} = require('./email');
/////////////////////////////////////////////
let app = express();

app.use(bodyParser.json());

// app.get('/',(req,res) => {
// 	res.render('/home/deep/Desktop/node/database/server/signup.hbs')

// });

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
	},(err) => {
		res.status(404).send(err);
	})
})

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
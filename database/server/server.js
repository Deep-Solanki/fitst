const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
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
			res.status(400).send(err);
		}
	)
});

app.get('/post',(req,res) => {
	intern.find().then((deeps) => {
		res.send({deeps})
	},(err) => {
		res.status(400).send(err);
	})
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
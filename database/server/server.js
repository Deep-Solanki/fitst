var express = require('express');
var bodyParser = require('body-parser');
//////////////////////////////////////////////
var {mongoose}= require('./mongoose');
var {intern} = require('./intern');

var {email} = require('./email');
/////////////////////////////////////////////
var app = express();

app.use(bodyParser.json());

app.get('/post',(req, res) => {
	var intern1 = new intern({
		Name: req.body.Name
	});

	intern1.save().then((doc) => {
		res.send(doc);
		}, (err) => {
			res.status(400).send(err);
		}
	)
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
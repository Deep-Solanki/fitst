///error solving 
const bodyParser = require('body-parser');
const express = require('express');
/////////////////////////////////////////////////////////
const {intern} = require('./intern');
const {email} = require('./email');
const {mongoose} = require('./mongoose');
/////////////////////////////////////////////////////////
let app = express();

app.use(bodyParser.json());

app.post('/post',(req, res) => {
	let intern1 = new intern({
		text: req.body.text
	});	

	intern1.save().then((doc) => {
		res.send(doc);
		console.log(doc);
		}, (err) => {
			res.status(400).send(err);
		}
	)
});
/////////////////////////////////////////////////////////
app.listen(3000, () => {
	console.log('Server started on port no. 3000....')
});


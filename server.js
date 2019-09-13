const express = require('express');
const hbs = require('hbs')
var app = express();
7
hbs.registerPartials(__dirname + '/app');
app.use(express.static(__dirname + '/app'));
app.set('view engine', 'hbs');

app.use('', (res,req,next)=>{
	console.log('middleware working...')
	next();
});

app.use(express.static(__dirname + '/app'));

app.get('/index',(req,res) => {
	res.render('/home/deep/Desktop/node/app/index.hbs', {
		name: 'user name',
		pwd: 'password'
	});
});

app.get('/home',(req,res) => {
	res.render('/home/deep/Desktop/node/app/home.hbs')
});

app.get('/',(req, res) => {
	res.send({
		name: 'Deep',
		ids: [1,2,3,4]
	});
});

app.get('/about',(req,res) =>{
	res.send('about page')
})

app.get('/contact%20us',(req, res) => {
	res.send('phone: 123456789')
})

app.listen(3001, () => {
	console.log('server 3001 is working');
});













































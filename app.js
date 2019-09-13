console.log('Starting App...');

//const fs = require('fs');

// fs.appendFile('message.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('Saved! in message.txt');
// });

// const os = require('os');
// var user = os.userInfo();

// fs.appendFile('hello.txt', `hello ${user.username}` , function (e){
// 	if(e) throw e;
// 	console.log('saved in hello.txt')
// });

// const _ = require('lodash');
// let arry = [1,2,34,5,6,7,8,1,2,3,4,5,6,7,8];

// console.log(_.isNumber(123))

// console.log(_.isBoolean(false))

// console.log(_.isString('123'))

// console.log(_.uniq (arry))

const app1 = require('./app1.js');
// console.log(app1.add(5,4));
// console.log(app1.sub(5,4));
// console.log(app1.mul(5,4));
// console.log(app1.div(5,4));

//const input = process.argv[2];
const yargs = require('yargs');
const argv = yargs.argv;
console.log('yargs', argv)
//console.log('input is: ' + );

if(argv._[0] === 'one'){
	app1.one(argv.name,argv.std,argv.department,argv.enno,argv.email);
	console.log('one');
}

else if(argv._[1] === 'two'){
	console.log('two');
}

else if(argv._[0] === 'three'){
	console.log('three');
}

else{
	console.log('not proper input');
}
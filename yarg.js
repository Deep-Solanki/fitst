const yexps = require('./yexp.js');
const yargs = require('yargs');
const fs = require('fs');
const os = require('os')

const argv = yargs.argv;

console.log(argv);


if(argv._[0] === 'deep'){
	yexps.user(argv.name,argv.id,argv.dept);
	console.log(argv.name + argv.id + argv.dept)
}

fs.appendFile("database.txt", `//////////user name: ${argv.name}, user id: ${argv.id}, user department: ${argv.dept}`, function(err){
	if(err) throw err;
	console.log('data stored.')
})

var user = os.userInfo();
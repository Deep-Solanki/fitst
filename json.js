// const name = {
// 	name: 'deep'
// };
// const type = JSON.stringify(name);
// console.log(typeof type)
// console.log(type)

// const stud = '{"name":"Deep","id":101}';
// var s = JSON.parse(stud);
// console.log(typeof s);
// console.log(s)
// console.log(s.name + " " + s.id);

const fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;


console.log(argv);

const data ={
	name: argv.name,
	id: argv.id,
	dept: argv.dept
}
// const user = {
// 	name: 'deeps',
// 	id: 1e01
// };
// const userS = JSON.stringify(user);
// console.log(typeof userS)
// console.log(userS)
const datas = JSON.stringify(data);
console.log(data);
fs.appendFile('js.json',datas,function(e){if(e) throw e});
console.log('data added.');

const userF = fs.readFileSync('js.json');
const userO = JSON.parse(userF);
console.log('data retrived.');
console.log(typeof userF)
console.log('user name: ' + userO.name + " id: " + userO.id);
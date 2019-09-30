const {SHA256} = require('crypto-js');

const msg = 'some msg';
const hash = SHA256(msg);

console.log('message: ' + msg);
console.log('Hash: ' + hash);

let data = {
	name:'deep',
	id:101
}

let token = {
	data,
	hash: SHA256(JSON.stringify(data)).toString()
}

data.id = 102

var res = SHA256(JSON.stringify(token.data)).toString();
if(res === token.hash){
console.log("----------------------------------------")
console.log('data: ' + JSON.stringify(data));
console.log('token: ' + JSON.stringify(token));
}
else{
	console.log('data is manipulated...')
}
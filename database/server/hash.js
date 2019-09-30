const jwt = require('jsonwebtoken');

let user = {
	name: 'Deep',
	id: 10,
	phone: 234567890
}

let token = jwt.sign(user, '123');
console.log("Encoded data: " + token);

let decode = jwt.verify(token, '123');
console.log('Decoded data: ' + JSON.stringify(decode));


module.exports.add = (a, b) =>{
	return a+b;
}

module.exports.square = (x) =>{
	return x*x;
}

let name;

module.exports.users = (user, fullName) => {
	name = fullName.split(' ');
	return user.firstName = name[0];
	return user.lastName = name[1];
	console.log(user);
	console.log(`${user.firstName} ${user.lastName}`);
}
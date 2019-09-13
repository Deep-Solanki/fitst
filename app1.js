console.log('in the app1.js')

// module.exports.add = (a, b) => {
// 	return 'sum is: ' + a+b;
// }

// module.exports.sub = (a, b) => {
// 	return 'sub is: ' + (a-b);
// }

// module.exports.mul = (a, b) => {
// 	return 'mul is: ' + a*b;
// }

// module.exports.div = (a, b) => {
// 	return 'div is: ' + a/b;
// }

const one = (name,std,department,enno,email) =>{
	console.log("customer name:", name);
	console.log("customer std:", std);
	console.log("customer department:", department);
	console.log("customer enno:", enno);
	console.log("customer email:", email);
}

module.exports = {one}





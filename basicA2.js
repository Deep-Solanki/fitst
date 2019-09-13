// var getUser = (id,callback,name)	=>{
// 	var user = {
// 		id: id,
// 		name: name
// 	}
// 	callback(user);
// }

// getUser(20,(user) => {
// 	console.log(user.name + ' ' + user.id );
// },'deepsolanki')

const request = require('request');

request({url: 'https://www.google.com',
		json: true
	},(error,response,body) =>{
		console.log(body + ' ' + JSON.stringify(response) + ' ' + error)
	})
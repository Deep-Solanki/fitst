const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
MongoClient.connect(url,(err,client) => {
	if(err){
		return console.log('unable to connect to database');
	}
	console.log("------------***------------");
	console.log('connected to database...');

	const db = client.db('mydb');

	// db.collection('intern').createOne({
	// 	name:'deep',
	// 	id:102
	// },(err,res) => {
	// 	if(err){
	// 		console.log("------------***------------");
	// 		console.log('unable to create new collection.');
	// 		return console.log("------------***------------");
	// 	}

	// 		console.log("------------***------------");
	// 		console.log("new collection is created...");
	// 		console.log("------------***------------");
	// });

	db.collection('student').insertOne({
		name: 'vishal',
		id: 101
	},(err,clients)=>{
		if(err){
			return console.log('unable to insert data.')
		}
		console.log("------------***------------");
		console.log('data inserted...');
		console.log("------------***------------");
		console.log(JSON.stringify(clients));
		console.log("------------***------------");
	});
	client.close();
});
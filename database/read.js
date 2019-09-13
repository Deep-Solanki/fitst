const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,client) => {
	if(err){
		console.log("------------***------------");
		console.log('unable to create new collection.');
		return console.log("------------***------------");
	};
	console.log("------------***------------");
	console.log('connected to database...');

	const db = client.db('mydb');
	db.collection('student').find().toArray().then((docs) =>{
		console.log('student');
		for(let i=0; i < docs.length; i++){
		console.log(JSON.stringify(docs[i]));
		console.log("----------------------------***----------------------------");
	}
	},(err) => {
		console.log("------------***------------");
		console.log('unable to fetch collection.');
		return console.log("------------***------------");
	});

});
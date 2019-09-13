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
	db.collection('student').findOneAndUpdate(
	// {
	// 	_id: new ObjectID("5d7a271930b1d571f3140992")
	// }
	{
		// $set: {
		// 	name: 'deep_solanki'
		// }
		$inc:{
			id: 1
		}
	},{
		returnOriginal: false
	}).then((result) =>{
		console.log('student');
		//for(let i=0; i < docs.length; i++){
		console.log(JSON.stringify(result));
		console.log("----------------------------***----------------------------");
	},(err) => {
		console.log("------------***------------");
		console.log('unable to fetch collection.' + err);
		return console.log("------------***------------");
	});

});
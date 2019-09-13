const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
MongoClient.connect(url,(err, client) => {
	if(err){
		return console.log('Unable to connect');
	}
	console.log('connected to server');
	const db = client.db('mydb');

	db.collection('student').insertOne({
	name: 'solanki',
	std: 'fy'
},async (err,result) => {
	if(err){
		return console.log('Unable to connect student', err);
	}

	const getdb = await db.collection('mydb').findOne({});

	console.log(getdb);
	//onsole.log(JSON.stringify(result.ops));
});

client.close();

});
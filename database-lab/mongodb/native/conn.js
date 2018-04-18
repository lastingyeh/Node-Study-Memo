const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const uri = require('../config').URI;

// MongoClient.connect(uri, (err, db) => {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log('connect success');
// });

module.exports = {
	dbclient: () => MongoClient.connect(uri),
	dbserver: () => {
		const Server = mongodb.Server;
		return new mongodb.Db('Article', new Server('localhost', '27017'));
	}
};

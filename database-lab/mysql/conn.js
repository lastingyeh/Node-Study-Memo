const mysql = require('mysql');

module.exports = dbName =>
	mysql.createPool({
		connectionLimit: 10,
		host: 'localhost',
		database: dbName,
		user: 'root',
		password: 'root'
	});

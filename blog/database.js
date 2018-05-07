const mysql = require('mysql');
const { host, user, password, port, database } = require('./config');

const db = mysql.createConnection({
	host,
	port,
	user,
	password,
	database,
});

db.connect(err => {
	if (err) {
		return console.log(err);
	}
	console.log('Connection established');
});

// db.end(err => {
// 	if (err) {
// 		db.destroy();
// 	}
// });

const execQuery = (sqlcmd, params = []) => {
	return new Promise((resolve, reject) => {
		db.query(sqlcmd, params, (err, rows, fields) => {
			if (err) {
				return reject(err);
			}
			resolve(rows);
		});
	});
};

module.exports = execQuery;

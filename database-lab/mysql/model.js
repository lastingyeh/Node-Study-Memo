const createpool = require('./conn');

class QueryModel {
	constructor(dbName) {
		this.connectpool = createpool(dbName);
	}

	// withConnectAsync() {
	// 	return new Promise((resolve, reject) => {
	// 		this.connectpool.getConnection((err, connection) => {
	// 			if (err) {
	// 				return reject(err);
	// 			}
	// 			resolve(connection);
	// 		});
	// 	});
	// }

	execQuery(sql, params = null) {
		return new Promise((resolve, reject) => {
			this.connectpool.getConnection((err, connection) => {
				if (err) {
					return reject(err);
				}
				connection.query(sql, params, (err, result) => {
					connection.release();
					if (err) {
						return reject(err);
					}
					resolve(result);
				});
			});
		});
	}
}

module.exports = QueryModel;

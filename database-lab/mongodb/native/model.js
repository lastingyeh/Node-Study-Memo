const { dbclient } = require('./conn');

class ClientDB {
	constructor(dbName, collection) {
		this.dbName = dbName;
		this.collection = collection;
	}

	getDBInstance() {
		return dbclient().then(client => {
			this.client = client;
			console.log(this.client.isConnected());
			return client.db(this.dbName).collection(this.collection);
		});
	}

	withClose(func) {
		return this.getDBInstance()
			.then(db => {
				return func(db);
			})
			.finally(() => {
				this.client && this.client.close();
				console.log(this.client.isConnected());
			});
	}

	insertData(doc) {
		return this.withClose(db => db.insertOne(doc));
	}

	findData(condition = {}) {
		return this.withClose(db => db.findOne(condition));
	}

	findAllData() {
		return this.withClose(db => db.find().toArray());
	}

	updateById(_id, updateKeyValue) {
		return this.withClose(db =>
			db.updateOne({ _id }, { $set: updateKeyValue })
		);
	}

	deleteById(_id) {
		return this.withClose(db => db.deleteOne({ _id }));
	}
}

module.exports = ClientDB;

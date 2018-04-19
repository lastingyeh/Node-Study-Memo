const QueryModel = require('./model');

async function main() {
	try {
		const queryModel = new QueryModel('nodejs');

		// insert action
		const insertResult = await queryModel.execQuery(
			'INSERT INTO Books VALUES(?,?,?,?,?)',
			['A0002', 'Apple Inc.', 'Swift', 'App Applied', 888]
		);

		// select action
		const queryRes = await queryModel.execQuery('SELECT * FROM Books');

		// select condition action
		const queryConditionRes = await queryModel.execQuery(
			'SELECT * FROM Books WHERE author = ?',
			['JS']
		);

		// update action
		const updateRes = await queryModel.execQuery(
			'UPDATE Books SET author = ?, price = ? WHERE idBooks = ?',
			['Javascript', 599, 'A0001']
		);

		// delete action
		const deleteRes = await queryModel.execQuery('DELETE FROM Books WHERE idBooks = ?', [
			'A0002'
		]);

		// console.log(insertResult);
		console.log(deleteRes);
	} catch (error) {
		console.log(error);
	}
}

main();

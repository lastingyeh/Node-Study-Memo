const ClientDB = require('./model');

async function main() {
	try {
		const db = new ClientDB('article', 'articles');

		// create article
		// const insertDoc = await db.insertData({
		// 	title: 'Java',
		// 	author: 'Oracle',
		// 	content: 'Open Community',
		// 	publishTime: new Date()
		// });

		// find article
		const doc = await db.findData({ title: 'React.js' });

		// find all articles
		// const docs = await db.findAllData();

		const updateDoc = await db.updateById(doc._id, { title: 'React.js' });

		const deleteDoc = await db.deleteById(doc._id);
	} catch (error) {
		console.log(error);
	}
}

main();

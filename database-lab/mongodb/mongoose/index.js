require('./conn');
const Article = require('./model/article');

// as localhost db instance start to test, it should type 'mongod --dbpath [/dbpath]' at terminal

async function main() {
	try {
		// create article
		const article = await Article.createDoc({
			title: 'reactJS',
			author: 'facebook',
			content: 'front-end framework!',
			publishTime: new Date()
		});

		// find articles
		const articles = await Article.findDocs();
		const doc = await Article.findDocs({ author: 'facebook' });

		// update article
		const updateDoc = await Article.updateDocById(articles[0].id, {
			author: 'fb'
		});

		// remove article
		const removeDoc = await Article.removeDocById(articles[0].id);

	} catch (error) {
		console.log(error);
	}
}

main();

const express = require('express');
const crypto = require('crypto');
const execQuery = require('../database');
const { dateformat } = require('../utils');
const router = express.Router();

//get all articles
router.get('/', async function(req, res, next) {
	try {
		const eachPages = 4;
		let page = req.query.page || 1;
		const start = (page - 1) * eachPages;
		const end = page * eachPages;

		const queryCount = await execQuery(
			'SELECT COUNT(*) AS articleNum FROM article',
		);

		console.log(queryCount);

		const pageNum = Math.ceil(queryCount[0].articleNum / eachPages);

		const rows = await execQuery(
			'SELECT * FROM article ORDER BY articleID DESC LIMIT ?, ?',
			[start, end],
		);

		const articles = rows.map(ele => {
			const { articleTime, ...others } = ele;
			return {
				articleTime: dateformat(articleTime),
				...others,
			};
		});
		res.render('index', {
			articles,
			user: req.session.user,
			page,
			pageNum,
		});
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

// get article and update click by id
router.get('/articles/:articleID', async function(req, res, next) {
	try {
		const articleID = req.params.articleID;

		// query get articleClick
		const rows = await execQuery('SELECT * FROM article WHERE articleID = ?', [
			articleID,
		]);

		let { articleClick } = rows[0];

		await execQuery('UPDATE article SET articleClick = ? WHERE articleID = ?', [
			++articleClick,
			articleID,
		]);

		const updateRows = await execQuery(
			'SELECT * FROM article WHERE articleID = ?',
			[articleID],
		);

		const { articleTime, ...others } = updateRows[0];

		res.render('article', {
			article: { articleTime: dateformat(articleTime), ...others },
			user: req.session.user,
		});
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

// edit render
router.get('/edit', function(req, res, next) {
	res.render('edit', { user: req.session.user });
});

// edit post
router.post('/edit', async function(req, res, next) {
	try {
		const { title, content } = req.body;
		const user = req.session.user;

		if (!user) {
			return res.redirect('/login');
		}

		await execQuery(
			'INSERT article SET articleTitle = ?, articleAuthor = ?, articleContent = ?, articleTime = CURDATE();',
			[title, user.authorName, content],
		);

		res.redirect('/');
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

// update render
router.get('/modify/:articleID', async function(req, res, next) {
	try {
		const articleID = req.params.articleID;
		const user = req.session.user;

		if (!user) {
			return res.redirect('/login');
		}

		const rows = await execQuery('SELECT * FROM article WHERE articleID = ?;', [
			articleID,
		]);

		const { articleTitle, articleContent } = rows[0];

		res.render('modify', {
			user,
			title: articleTitle,
			content: articleContent,
		});
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

// update post
router.post('/modify/:articleID', async function(req, res, next) {
	try {
		const articleID = req.params.articleID;
		const user = req.session.user;
		const { title, content } = req.body;

		if (!user) {
			return res.redirect('/login');
		}

		await execQuery(
			'UPDATE article SET articleTitle = ?, articleContent = ? WHERE articleID = ?;',
			[title, content, articleID],
		);

		res.redirect('/');
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

// delete render
router.get('/delete/:articleID', async function(req, res, next) {
	try {
		const articleID = req.params.articleID;
		const user = req.session.user;

		if (!user) {
			return res.redirect('/login');
		}

		await execQuery('DELETE FROM article WHERE articleID = ?;', [articleID]);

		res.redirect('/');
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

// friends
router.get('/friends', function(req, res, next) {
	res.render('friends', { user: req.session.user });
});

// about
router.get('/about', function(req, res, next) {
	res.render('about', { user: req.session.user });
});

// login render
router.get('/login', function(req, res, next) {
	res.render('login', { message: '' });
});

// login post
router.post('/login', async function(req, res, next) {
	try {
		const { name, password } = req.body;

		const hash = crypto.createHash('md5');
		hash.update(password);
		const hashpassword = hash.digest('hex');

		console.log(hashpassword);

		const rows = await execQuery(
			'SELECT * FROM author WHERE authorName = ? AND authorPassword = ?',
			[name, hashpassword],
		);

		const user = rows[0];

		if (!user) {
			return res.render('login', { message: 'Login Failure' });
		}
		req.session.user = user;
		// req.session.userSign = true;
		// req.session.userID = user.authorID;
		res.redirect('/');
	} catch (error) {
		console.log(error.message);
		res.render('error', { message: error.message, error });
	}
});

router.get('/logout', function(req, res, next) {
	req.session.user = null;
	res.redirect('/');
});

module.exports = router;

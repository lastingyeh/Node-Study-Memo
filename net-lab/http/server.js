const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const util = require('util');
const mime = require('./mime');

const existsAsync = util.promisify(fs.exists);
const readFileAsync = util.promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
	// response header
	// res.writeHead(200, { 'content-type': 'text/plain' });
	try {
		// urlparser
		const urlpath = new RegExp('^/$').test(url.parse(req.url).pathname)
			? 'index.html'
			: req.url;

		const filepath = path.join(__dirname, 'tmp', urlpath);

		const exists = await existsAsync(filepath);

		if (!exists) {
			return res.end('404');
		}

		const contentType = mime[path.extname(filepath)];

		res.writeHead(200, { 'content-type': contentType });

		const html = await readFileAsync(filepath);

		res.write(html);
		res.end();
	} catch (error) {
		console.error(error);
		res.end('500');
	}
});

server.listen(3000, () => {
	console.log('listening port 3000');
});

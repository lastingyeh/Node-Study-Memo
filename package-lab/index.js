const request = require('request');
const path = require('path');
const fs = require('fs');
const { url, imgDir } = require('./config');
const { findImg } = require('./analyze');

function start() {
	request(url, function(err, res, body) {
		console.log('start');
		if (err) {
			return console.error(err);
		}
		console.log('get res');
		findImg(body, download);
	});
}

function download(imgUrl, i) {
	let ext = imgUrl.split('.').pop();

	if(new RegExp('^//').test(imgUrl)){
		return console.log(imgUrl)
	}

	request(imgUrl).pipe(
		fs.createWriteStream(path.join(imgDir, `${i}.${ext}`), { encoding: 'utf8' })
	);

	console.log(i);
}

start();

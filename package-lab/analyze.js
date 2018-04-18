const cheerio = require('cheerio');

module.exports = {
	findImg: (dom, callback) => {
		let $ = cheerio.load(dom);

		$('img').each(function(i, elem) {
			let imgSrc = $(this).attr('src');
			callback(imgSrc, i);
		});
	}
};

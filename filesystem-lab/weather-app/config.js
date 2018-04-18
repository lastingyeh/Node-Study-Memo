const path = require('path');

module.exports = {
	API_KEY: 'your forecast.io api-key',
	url: 'https://api.darksky.net/forecast/',
	filepath: path.join(__dirname, 'tmp', '/')
};

const path = require('path');

module.exports = {
	API_KEY: 'your forcast.io api-key',
	url: 'https://api.darksky.net/forecast/',
	filepath: path.join(__dirname, 'tmp', '/')
};

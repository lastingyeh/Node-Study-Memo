const mongoose = require('mongoose');

const uri = require('../config').URI;
// standard uri - mongodb://user:password@localhost:port/database

mongoose.connect(uri, err => {
	if (err) {
		return console.error(err);
	}
	console.log('connection success');
});

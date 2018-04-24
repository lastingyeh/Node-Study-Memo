function asyncfunc(callback) {
	setTimeout(() => {
		console.log('async');
		callback();
	}, 100);
}

module.exports = { asyncfunc };

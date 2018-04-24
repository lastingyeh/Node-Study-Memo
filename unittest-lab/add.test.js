function add() {
	if (arguments.length > 0) {
		return [].slice.call(arguments).reduce((acc, cur) => {
			return acc + cur;
		});
	} else {
		return 0;
	}
}

module.exports = {
	add,
};

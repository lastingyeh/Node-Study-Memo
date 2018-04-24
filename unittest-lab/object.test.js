function objType(ele) {
	if (typeof ele === 'object') {
		return {};
	} else {
		return false;
	}
}

module.exports = { objType };

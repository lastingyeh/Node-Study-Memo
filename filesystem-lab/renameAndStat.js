const fs = require('fs');
const util = require('util');

const renameAsync = util.promisify(fs.rename);
const statAsync = util.promisify(fs.stat);

function renameAndStat(oldpath, newpath) {
	if (newpath) {
		return renameAsync(oldpath, newpath).then(() => statAsync(newpath));
	}
	return statAsync(oldpath);
}

module.exports = renameAndStat;

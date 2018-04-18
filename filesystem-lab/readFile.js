const fs = require('fs');
const util = require('util');

const openAsync = util.promisify(fs.open);
const readAsync = util.promisify(fs.read);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

module.exports = {
	openAndReadFile: filepath => {
		return openAsync(filepath, 'r').then(fd => {
			const buffer = new Buffer(1024);
			const offset = 0;
			const length = buffer.length;
			const startpos = 100;

			return readAsync(fd, buffer, offset, length, startpos).then(readbytes => {
				console.log(`total read : ${readbytes} bytes`);
				console.log(buffer.slice(0, readbytes));
			});
		});
	},
	readFile: filepath => {
		return readFileAsync(filepath, { encoding: 'utf8' }).then(data => {
			console.log(data);
		});
	},
	writeFile: (filepath, writedata) => {
		return writeFileAsync(filepath, data).then(data => {
			console.log(data);
		});
	},
	appendFile: (filepath, appenddata) => {
		return appendFileAsync(filepath, appenddata).then(data => {
			console.log(data);
		});
	}
};

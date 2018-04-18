const renameAndStat = require('./renameAndStat');
const fileuse = require('./readFile');
const csvgen = require('./csv-gen')

async function main() {
	try {
		const filepath = './filesystem-lab/tmp/sango.txt';
		const filepath2 = './filesystem-lab/tmp/hello';
		// const stat = await renameAndStat('./ch05/tmp/hello');
		// console.log(stat.isFile())
		// await openAndReadFile(filepath);
		// await fileuse.readFile(filepath);
		// await fileuse.writeFile(filepath2, 'say hello world');
		// await fileuse.appendFile(filepath2, '\r\nappend data test');
		csvgen();
	} catch (error) {
		console.error(error);
	}
}

// exec
main();

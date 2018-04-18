const csv = require('csv');

function handleCSV() {
	const generator = csv.generate({ seed: 1, columns: 2, length: 20 });
	const parser = csv.parse();
	const transformer = csv.transform(data => {
		return data.map(val => val.toUpperCase());
	});

	const stringifier = csv.stringify();
	// generator data
	generator.on('readable', () => {
		while ((data = generator.read())) {
			parser.write(data);
		}
	});
	// parser data
	parser.on('readable', () => {
		while ((data = parser.read())) {
			transformer.write(data);
		}
	});
	// transformer data
	transformer.on('readable', () => {
		while ((data = transformer.read())) {
			stringifier.write(data);
		}
	});
	// stdout
	stringifier.on('readable', () => {
		while ((data = stringifier.read())) {
			process.stdout.write(data);
		}
	});
}

module.exports = handleCSV;
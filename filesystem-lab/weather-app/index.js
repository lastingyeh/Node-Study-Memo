const { filepath } = require('./config');
const apis = require('./apis');

async function main() {
	try {
		// load ips from tmp/ips.json
		const latlngs = await apis.readJSONs(filepath + 'latlngs.json');

		const weathers = await Promise.all(
			latlngs.map(latlng => apis.latlng2geo(latlng))
		);

		await apis.write2file(filepath + 'weathers.json', weathers);
	} catch (error) {
		console.error(error);
	}
}

main();

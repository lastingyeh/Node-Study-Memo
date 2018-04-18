const rp = require('request-promise');
const qs = require('querystring');
const fs = require('fs');
const util = require('util');
const config = require('./config');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = {
	readJSONs: filapath => {
		return readFileAsync(filapath, { encoding: 'utf8' }).then(data =>
			JSON.parse(data)
		);
	},
	latlng2geo: latlng => {
		const { lat, lng } = latlng;
		// const uri = `https://telize-v1.p.mashape.com/geoip/${ip}`;
		const uri = config.url + config.API_KEY + `/${lat},${lng}`;

		return rp({ uri, json: true }).then(res => {
			const { timezone, latitude, longitude, currently } = res;
			return {
				region: timezone,
				lat: latitude,
				lng: longitude,
				current: {
					precipType: currently.precipType,
					temperature: currently.temperature
				}
			};
		});
	},
	// geo2weather: (lat, lng) => {
	// 	const params = { lat, lng, APPID: '' };

	// 	const uri = `http://api.openweathermap.org/data/2.5/weather?${qs.stringify(
	// 		params
	// 	)}`;

	// 	return rp({ uri, json: true });
	// },
	write2file: (savepath, weathers) => {
		// const jsondata = weathers.map(w => ({
		// 	ip: w.geo.ip,
		// 	weather: w.weather[0].main,
		// 	region: w.geo.region
		// }));

		return writeFileAsync(
			savepath,
			JSON.stringify(weathers, null, ' ')
		);
	}
};

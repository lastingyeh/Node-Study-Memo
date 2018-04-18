const net = require('net');

const client = new net.Socket();

client.connect(18001, '127.0.0.1', () => {
	console.log('connect to server');

	// write data to server
	client.write('%client - message from client');
});

client.on('data', data => {
	console.log('the data %s from server', data.toString());
});

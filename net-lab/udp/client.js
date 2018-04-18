const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

const message = new Buffer('Client message');

socket.send(message, 0, message.length, 41234, 'localhost', (err, bytes) => {
	if (err) {
		return console.error(err);
	}
	console.log('client send %d message', bytes);
});

socket.on('message', (msg, rinfo) => {
	console.log('message from server.');
});

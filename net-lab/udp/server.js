const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.bind(41234, 'localhost', () => {
	console.log('binding on 41234');
});

socket.on('message', (msg, rinfo) => {
	console.log(msg.toString());

	const message = new Buffer('Server message send');
	socket.send(
		message,
		0,
		message.length,
		rinfo.port,
		rinfo.address,
		(err, bytes) => {
			if (err) {
				return console.error(err);
			}
			console.log('send %d message', bytes);
		}
	);
});

socket.on('listening', () => {
	console.log('listening begin');
});

socket.on('close', () => {
	console.log('server colesed');
});

socket.on('error', err => {
	console.log(err);
});

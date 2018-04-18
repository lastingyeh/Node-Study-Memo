const net = require('net');

// 1. createServer
// const server = net.createServer(socket => {
// 	console.log('connecting');
// });

// 2. new net.Server
const server = new net.Server();

server.on('connection', socket => {
	console.log('connecting');
	// set max connections
	server.maxConnections = 3;
	// get client connections
	server.getConnections((err, count) => {
		console.log('client connections has %d', count);
	});

	// server to client
	const address = server.address();
	const message = `%server - the server address is ${JSON.stringify(address)}`;

	socket.write(message, () => {
		const wsize = socket.bytesWritten;

		console.log('%s has send', message);
		console.log('the size of messsag is %d', wsize);
	});

	// client to server
	socket.on('data', data => {
		console.log(data.toString());
		const rsize = socket.bytesRead;

		console.log('the size of data is %d', rsize);
	});

	// extra props
	const opts = {
		localport: socket.localPort,
		localaddress: socket.localAddress,
		remoteport: socket.remotePort,
		remotefamily: socket.remoteFamily,
		remoteaddress: socket.remoteAddress
	};

	console.log(JSON.stringify(opts, undefined, 2));
});

server.listen(18001, () => {
	const address = server.address();

	console.log('the port of server is %d', address.port);
	console.log('the address of server is %s', address.address);
	console.log('the family of server is %s', address.family);
});

server.on('listening', () => {
	console.log('server is listening');
});

server.on('close', () => {
	console.log('server is closing');
});

server.on('error', err => {
	console.error('err', err.message);
});

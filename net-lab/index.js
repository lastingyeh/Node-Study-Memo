// require('./tcp/server');

// process.nextTick(() => require('./tcp/client'), 100);

// require('./http/server')

require('./udp/server');

process.nextTick(() => require('./udp/client'));

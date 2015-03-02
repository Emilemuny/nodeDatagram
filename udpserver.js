// require the dgram module
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

// Listen for emission of the "message" event.
server.on('message', function (message) {
  console.log('received a message:' + message);
  });

server.on('listening', function() {
  var address = server.address();
  console.log('server listening' + address.address + ':' + address.port);
});

var port = 41234;
server.bind(port);


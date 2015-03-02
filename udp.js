var dgram = require('dgram');
var client = dgram.createSocket('udp4');
//var server = dgram.createSocket('udp4');

var message = process.argv[2] || "message";

message = new Buffer(message);
client.send(message, 0, message.length, 41234, 'localhost', function (err,bytes) {
 if(err) {
   throw err;
 }
 //in here i can reuse the message buffer in case there's an error, or
 //close the client
 client.close();
}
  );


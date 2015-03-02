#! /usr/bin/env node

var dgram = require('dgram');
var host = process.argv[2];
var port = parseInt(process.argv[3], 10);

client = dgram.createSocket('udp4');
process.stdin.resume();
process.stdin.on('data', function(data) {
  client.send(data, 0, data.length, port, host);
});

client.on('message', function(message) {
  console.log('Client:' + message.toString());
 });

console.log('To send a message,' + 'type now and press return.');


var dgram = require('dgram');
var udpPort = process.env.UDPPORT || 49152;

var server = dgram.createSocket('udp4');
server.bind(udpPort);


server.on('listening', function(){
  console.log('Server started at ', udpPort);
});

server.on('message', function(msg, info){
  var message = msg.toString(); // need to convert to string 
  // since message is received as buffer 
  // receive the message and do task
  console.log(message);
  response = "{\"ts\": \"123456\", \"s\": \"0\", \"eye\": \"right\", \"pd\": \"4.23\"}";
  server.send(response, 0, response.length, info.port, info.address);
});

server.on('error', function(){
  // handle error
});



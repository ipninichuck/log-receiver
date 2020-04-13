const fs = require('fs');
const server = require('http').createServer();
const io = require('socket.io')(server);
const bodyParser = require('body-parser');

//create http server and set port to listen on
const port = 9000;


//When connected & Message received log the message to file
io.on('connection', function(socket) {
  socket.on('msg', function(data) {
    let log = JSON.stringify(data);
    fs.writeFileSync('log.json', log);
  });
});
//set server to listen on specified port
  server.listen(port);

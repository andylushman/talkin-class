const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  origins: ['http://localhost:3000']
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('chat message', msg => {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

http.listen(3001, () => {
  console.log('listening on port: 3001');
});

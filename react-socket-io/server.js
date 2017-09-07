const io = require('socket.io')();

const port = 8099;
io.listen(port);
console.log("listerning on port", port);

io.on('connection', (client) => {
  //This is where we emit events to the client
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

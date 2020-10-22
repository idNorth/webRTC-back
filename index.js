const express = require('express');
const http = require('http');
const socket = require('socket.io');
const config = require('./config');
const socketEvents = require('./socketEvents').socketEvents;

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
  socketEvents(socket)
});

server.listen(config.PORT, () => console.log(`server is running: ${config.PORT}`) )
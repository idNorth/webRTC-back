const express = require('express');
const http = require('http');
const socket = require('socket.io');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = socket(server);

/*
* [name]: {
*   id:
*   password:
* }
* */
const rooms  = {}

io.on('connection', socket => {
  socket.on('createRoom', () => {
    const label = 'Test'
    rooms[label] = {
      id: socket.id,
      password: 123123
    }
  });
});

server.listen(config.PORT, () => console.log(`server is running: ${config.PORT}`) )
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io');

const config = require('./config');
const { getCommonApp } = require('./routes');
const socketHandlers = require('./services/socket');

const app = express();

const databaseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

mongoose.connect(process.env.MONGODB_URI || config.database, databaseOptions)
  .then(() => console.log('db connect'))
  .catch( err => console.log('connect error', err));

app.use(cors());
app.use(bodyParser.json());
app.use(getCommonApp());

const server = http.createServer(app);

global.websocket = io(server, {
  path: '/api/socket.io',
  pingTimeout: 10000,
  upgradeTimeout: 5000
});


global.websocket
  .on('connection', socketHandlers);

server.listen(config.PORT, () => console.log(`server is running: ${config.PORT}`) )
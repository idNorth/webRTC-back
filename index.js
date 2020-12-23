const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');

const databaseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

mongoose.connect(process.env.MONGODB_URI || config.database, databaseOptions)
  .then(() => console.log('db connect'))
  .catch( err => console.log('connect error', err));

const app = express();
const server = http.createServer(app);

server.listen(config.PORT, () => console.log(`server is running: ${config.PORT}`) )
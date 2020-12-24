const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const { getCommonApp } = require('./routes');

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

server.listen(config.PORT, () => console.log(`server is running: ${config.PORT}`) )
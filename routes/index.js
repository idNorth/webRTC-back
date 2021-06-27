const express = require('express');
const commonApp = express();

const auth = require('./auth');
const user = require('./user');
const chat = require('./chat');
const group = require('./group');

exports.getCommonApp = () => {
  commonApp.use('/api/auth', auth);
  commonApp.use('/api/user', user);
  commonApp.use('/api/chat', chat);
  commonApp.use('/api/group', group);

  return commonApp;
}
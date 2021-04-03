const express = require('express');
const commonApp = express();

const auth = require('./auth');
const group = require('./group');
const user = require('./user');

exports.getCommonApp = () => {
  commonApp.use('/api/auth', auth);
  commonApp.use('/api/group', group);
  commonApp.use('/api/user', user);

  return commonApp;
}
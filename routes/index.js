const express = require('express');
const commonApp = express();

const auth = require('./auth');

exports.getCommonApp = () => {
  commonApp.use('/api/auth', auth);

  return commonApp;
}
const express = require('express');
const router = express.Router();

const validation = require('./validation');
const controllers = require('./controllers');

router.get('/signIn', validation.signIn, controllers.signIn)
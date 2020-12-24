const express = require('express');
const router = express.Router();

const validation = require('./validation');
const controllers = require('./controllers');

router.post('/signIn', validation.signIn, controllers.signIn);

module.exports = router;
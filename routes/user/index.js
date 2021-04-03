const express = require('express');
const router = express.Router();

const controllers = require('./controllers');
const { checkAuth } = require('../../middleware/auth');

router.get('/getUsers', checkAuth, controllers.getUsers);

module.exports = router;
const express = require('express');
const router = express.Router();

const validation = require('./validation');
const controllers = require('./controllers');
const { checkAuth } = require('../../middleware/auth');

router.post('/login', validation.login, controllers.login);
router.get('/logout', checkAuth, controllers.logout);

module.exports = router;
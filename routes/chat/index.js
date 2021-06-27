const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.post('/create', controllers.createChat);
router.get('/get/:id', controllers.getChat);
router.get('/messages/:id', controllers.getMessages);

module.exports = router;
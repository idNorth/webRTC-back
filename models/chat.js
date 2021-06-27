const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  members:[mongoose.Schema.ObjectId]
});

mongoose.model('Chat', ChatSchema);

module.exports = mongoose.model('Chat');
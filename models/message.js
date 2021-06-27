const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  chatId: mongoose.Schema.ObjectId,
  senderId: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('Message', MessageSchema);

module.exports = mongoose.model('Message');
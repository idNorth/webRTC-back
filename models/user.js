const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  chats: {
   type: [String]
  }
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
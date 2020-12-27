const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  key: {
    type: String,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  createDate: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.methods.generateToken = (user) => (
  jwt.sign({
    id: user._id,
    key: user.key,
  }, config.secret)
);


mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
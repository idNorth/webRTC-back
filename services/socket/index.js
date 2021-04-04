const { addListenerUser } = require('../../routes/user/controllers');

const socketHandlers = (socket) => {
  addListenerUser(socket);
};

module.exports = socketHandlers

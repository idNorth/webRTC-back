const uniqid = require('uniqid');

const rooms  = {}

exports.socketEvents = (socket) => {
  socket.on('createRoom', () => {
    const roomId = uniqid();
    rooms[roomId] = {
      members: [socket.id],
      roomId: roomId
    }
  });

  socket.on('joinRoom', ({ roomId }) => {
    if (!rooms[roomId]) return;
    rooms[roomId].members.push(socket.id);
  });
}

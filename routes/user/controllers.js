const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');
const User = require('../../models/user');
const { IO_TYPES } = require('../../constants/socket');

exports.getUsers = async (req, res) => {
  const { id } = req.token;
  try {
    const users = await User.find({'_id': {$ne: id}});

    return resHandler(res, { users, total: users.length })
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}

const getUsersS = async () => {
  try {
    const users = await User.find();
    return { users, total: users.length }
  } catch (err) {
    return { users: [], total: 0 }
  }
}

exports.addListenerUser = (socket) => {
  socket.on(IO_TYPES.LOGIN, async () => {
    const result = await getUsersS();
    socket.emit(IO_TYPES.LOGIN, result);
    socket.broadcast.emit(IO_TYPES.LOGIN, result);
  })
}
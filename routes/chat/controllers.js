const { IO_TYPES } = require('../../constants/socket');
const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');
const Message = require('../../models/message');
const Chat = require('../../models/chat');

exports.createChat = async (req, res) => {
  const { userId } = req.body;
  try {
    const chat = await Chat.findOne().exec();

    if (!chat) await new Chat({ members: [userId] }).save();
    console.log({ chat });
    return resHandler(res)
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}

exports.getChat = async (req, res) => {
  const { id } = req.params;
  try {
    const chat = await Chat.findById(id).exec();

    if (!chat) {
      return resHandler(res, {}, errorMsg.SomethingWentWrong, 400);
    }

    return resHandler(res, { chat })
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}

exports.getMessages = async (req, res) => {
  const { id } = req.params;
  try {
    const messages = await Message.find({ chatId: id }).exec();

    return resHandler(res, { messages })
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}

exports.addListenerChat = (socket) => {
  socket.on(IO_TYPES.JOIN_CHAT, async (chatId, userId) => {
    const chat = await Chat.findById(chatId);
    await chat.set({ members: [...chat.members, userId] })
    socket.join(chatId);
  })
  socket.on(IO_TYPES.LEAVE_CHAT, async (chatId, userId) => {
    const chat = await Chat.findById(chatId);
    await chat.set({ members: chat.members.filter((member) => member !== userId)})
    socket.leave(chatId, (err) => console.error('error', err));
  })

  socket.on(IO_TYPES.NEW_MESSAGE, async () => {
    // const result = await getUsersS();
    // socket.emit(IO_TYPES.NEW_MESSAGE, result);
    // socket.broadcast.emit(IO_TYPES.NEW_MESSAGE, result);
  })
}
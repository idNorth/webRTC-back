const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');
const User = require('../../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return resHandler(res, { users, total: users.length })
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}

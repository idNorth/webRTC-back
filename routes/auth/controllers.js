const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');
const User = require('../../models/user');

exports.signIn = async (req, res) => {
  const { username } = req.body
  try {
    const number = Math.random() * Date.now();
    const key = number.toString(36)
      .replace('.', '#')
      .substr(2, 9)
      .toUpperCase();

    const user = new User({ username, key, isActive: true });
    await user.save();

    const token = user.generateToken(user);

    return resHandler(res, { token })
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}
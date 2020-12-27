const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');
const User = require('../../models/user');

exports.login = async (req, res) => {
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

exports.logout = async (req, res) => {
  const { id } = req.token
  try {
    const user = await User.findById(id);
    if (!user) return resHandler(res, {}, errorMsg.UsernameIsMissing, 400)

    await User.remove({ _id: id });

    return resHandler(res, {})
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}
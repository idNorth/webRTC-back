const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');

exports.signIn = async (req, res) => {
  const { username } = req.body
  try {
    console.log(username);
    return resHandler(res, {})
  } catch (err) {
    return resHandler(res, {}, errorMsg.SomethingWentWrong, 400)
  }
}
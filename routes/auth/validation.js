const resHandler = require ('../../helpers/respons');
const errorMsg = require('../../helpers/errorMsg');

exports.signIn = (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    return resHandler(res, {}, errorMsg.UsernameIsMissing, 400)
  } else if (username.trim().length > 15){
    return resHandler(res, {}, errorMsg.UsernameMustBeLess,400)
  } else if (username.trim().length < 3){
    return resHandler(res, {}, errorMsg.UsernameMustBeMore,400)
  }

  next();
}
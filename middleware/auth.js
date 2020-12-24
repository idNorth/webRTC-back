const resHandler = require ('../helpers/respons');
const errorMsg = require ('../helpers/errorMsg');
const jwt = require('jsonwebtoken');

export const checkAuth = () => (req, res, next) => {
  const token = req.query.Authorization || req.headers.authorization || req.query.token;
  if (!token) return resHandler(res, {}, errorMsg.Unauthorized, 401);
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return resHandler(res, {}, errorMsg.Unauthorized, 401);
    req.token = decoded;
    next();
  });
};
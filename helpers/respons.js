module.exports = (res, data = {}, message = { code: '000000', message: 'OK' }, status = 200) => {
  return res.status(status).send({ data, message });
};
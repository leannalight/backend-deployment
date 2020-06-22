const jwt = require('jsonwebtoken');
const { PrivateKey } = require('../config');
const UnauthorizedError = require('../errors/unauthorized-err');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, PrivateKey);
  } catch (error) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;

  return next();
};

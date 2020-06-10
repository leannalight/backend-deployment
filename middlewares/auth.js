const jwt = require('jsonwebtoken');
const { PrivateKey } = require('../config');

const handleAuthError = (res) => {
  res.status(401).send({ message: 'Необходима авторизация' });
};

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    return handleAuthError(res);
  }

  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, PrivateKey);
  } catch (error) {
    return handleAuthError(res);
  }

  req.user = payload;

  return next();
};

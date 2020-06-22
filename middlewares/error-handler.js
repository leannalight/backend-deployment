const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
module.exports.errorHandler = (error, req, res, next) => {
  const { code } = error;
  let { statusCode = 500, message } = error;
  if
  (error instanceof mongoose.Error.ValidationError || error instanceof mongoose.Error.CastError) {
    statusCode = 400;
  }
  if (code === 11000) {
    statusCode = 409;
    message = 'Данный email уже зарегистрирован';
  }
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Произошла ошибка' : message,
  });
};

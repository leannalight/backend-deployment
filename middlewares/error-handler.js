
module.exports.errorHandler = (error, req, res, next) => {
  const errorCodes = {
    NotFoundError: 404,
    CastError: 400,
    ValidationError: 400,
    Unauthorized: 401,
    Forbidden: 403,
    Conflict: 409,
  };
  const errorName = error.name;
  const { message } = error || 'Неизвестная ошибка';
  const errorStatus = errorCodes[error.name] || 500;
  res.status(errorStatus).send({ errorName, message });
  return next();
};

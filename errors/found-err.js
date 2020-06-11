function FoundError(error, res) {
  if (error.name === 'ValidationError') {
    return res.status(400).send({ message: error.message });
  }
  if (error.name === 'CastError') {
    return res.status(400).send({ message: 'id is not found' });
  }
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).send({
    message: statusCode === 500 ? 'Произошла ошибка' : error.message,
  });
}
module.exports = FoundError;

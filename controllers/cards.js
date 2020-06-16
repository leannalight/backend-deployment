const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.deleteCardbyId = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId).populate('owner')
    .orFail(() => {
      throw new NotFoundError('Карточка не найдена');
    })
    .then((card) => {
      if (card.owner._id.toString() !== req.user._id) {
        throw new ForbiddenError('Доступ запрещён');
      }
      return card.remove()
        .then(() => res.send({ data: card }));
    })
    .catch(next);
};

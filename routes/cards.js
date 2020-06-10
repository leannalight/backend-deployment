const router = require('express').Router();
const { getCards, createCard, deleteCardbyId } = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCardbyId);

module.exports = router;

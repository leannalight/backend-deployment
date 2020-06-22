const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const { getUsers, getUserbyId } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
}), getUserbyId);

module.exports = router;

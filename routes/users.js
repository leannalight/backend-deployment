const router = require('express').Router();
const { getUsers, getUserbyId } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserbyId);

module.exports = router;

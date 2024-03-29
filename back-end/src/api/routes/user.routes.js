const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/login', userController.authenticateUser);
router.post('/register', userController.createUser);
router.get('/', userController.getUsers);
router.delete('/:id', userController.deleteUser);

module.exports = router;
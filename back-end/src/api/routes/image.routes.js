const express = require('express');
const imageController = require('../controllers/images.controller');

const router = express.Router();

router.get('/:fileName', imageController.getImage);

module.exports = router;
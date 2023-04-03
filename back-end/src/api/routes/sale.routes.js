const express = require('express');
const SalesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', SalesController.getSales);
router.get('/:id', SalesController.getSalesById);
router.post('/', SalesController.createSale);

module.exports = router;
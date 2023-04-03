const express = require('express');
const SalesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', SalesController.getSales);
router.get('/:id', SalesController.getSalesById);
router.post('/', SalesController.createSale);
router.patch('/:id/:status', SalesController.updateSale);

module.exports = router;
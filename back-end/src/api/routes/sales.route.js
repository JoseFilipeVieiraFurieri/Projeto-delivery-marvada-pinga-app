const express = require('express');
const SalesController = require('../controllers/sales.controller')

const router = express.Router();

router.get('/sales', SalesController.getSales)
router.get('/sales/:id', SalesController.getSalesById)
router.post('/sales', SalesController.createSale)

module.exports = router;
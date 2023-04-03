const SalesService = require('../services/sales.service');

const getSales = async (req, res) => {
  try {
    const allSales = await SalesService.getSales();
    return res.status(200).json(allSales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  try {
    const saleId = await SalesService.getSalesById(id);
    return res.status(200).json(saleId);
  } catch (error) {
    res.status(409).json({ message: 'Pedido não encontrado' });
  }
};

const createSale = async (req, res) => {
  try {
    const createdUser = await SalesService.createSale(req.body);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const updateSale = async (req, res) => {
  try {
    const { status, id } = req.params;
    await SalesService.updateSale(status, id);
    return res.status(200).json({ message: 'ok' });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getSales, getSalesById, createSale, updateSale };
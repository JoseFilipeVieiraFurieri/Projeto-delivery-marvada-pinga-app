const { Product } = require('../../database/models');
// const ErrorWithStatus = require('../utils/ErrorWithStatus');

const getProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

module.exports = { getProducts };
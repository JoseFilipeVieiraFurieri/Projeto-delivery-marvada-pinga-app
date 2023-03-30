const productService = require('../services/product.service');

const getProducts = async (req, res) => {
  try {
    const allProducts = await productService.getProducts();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
};

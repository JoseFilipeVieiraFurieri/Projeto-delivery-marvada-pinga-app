const Sequelize = require('sequelize');
const { Sale, SaleProduct, Product } = require('../../database/models');
const config = require('../../database/config/config');

const env = 'development';
const sequelize = new Sequelize(config[env]);

const getSales = async () => {
  const allSales = await Sale.findAll();
  return allSales;
};

const getSalesById = async (id) => {
  const Sales = await Sale.findByPk(id, {
    include: [
      { model: Product, as: 'product' },
    ],
  });
  return Sales;
};

const createSale = async ({ totalPrice, deliveryAddress, deliveryNumber, 
  status, userId, sellerId, quantity, productId }) => {
  const t = await sequelize.transaction();

  try {
    const createdSale = await Sale.create({
      totalPrice, deliveryAddress, deliveryNumber, status, userId, sellerId,
    });

    await SaleProduct.create({
      saleId: createdSale.id,
      productId,
      quantity,
    });

    await t.commit();

    return createdSale;
  } catch (error) {
    await t.rollback();
    console.log(error);
    throw error; 
  }
};

module.exports = { getSales, getSalesById, createSale };

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
  userId, sellerId, orderDetails }) => {
  const t = await sequelize.transaction();

  try {
    const createdSale = await Sale.create({
      totalPrice, deliveryAddress, deliveryNumber, userId, sellerId,
    });

    const treatedArray = orderDetails.map((order) => ({ ...order, saleId: createdSale.id }));

    await SaleProduct.bulkCreate(treatedArray);

    await t.commit();

    return createdSale;
  } catch (error) {
    await t.rollback();
    console.log(error);
    throw error; 
  }
};

const updateSale = async (status, id) => {
  await Sale.update({ status }, { where: { id } });
};

module.exports = { getSales, getSalesById, createSale, updateSale };

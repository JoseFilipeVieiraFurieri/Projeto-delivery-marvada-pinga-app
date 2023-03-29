'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL(4,2),
      url_image: Sequelize.STRING,
    }, {
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};

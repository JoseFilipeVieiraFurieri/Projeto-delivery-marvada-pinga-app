'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      seller_id: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      total_price: Sequelize.FLOAT,
      delivery_address: Sequelize.STRING,
      delivery_number: Sequelize.STRING,
      sale_date: Sequelize.DATE,
      status: Sequelize.STRING,
    }, {
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};

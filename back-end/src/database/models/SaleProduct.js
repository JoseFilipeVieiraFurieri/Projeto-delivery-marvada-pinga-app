const SaleProductSchema = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SaleProductTable.associate = ({ Sale, Product }) => {
    Product.belongsToMany(Sale, {
      as: 'sale',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      through: SaleProductTable,
    });
    Sale.belongsToMany(Product, {
      as: 'product',
      foreignKey: 'sale_id',
      otherKey: 'product_id',
      through: SaleProductTable,
    });
  };

  return SaleProductTable;
}

export default SaleProductSchema;

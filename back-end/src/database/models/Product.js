const ProductSchema = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    urlImage: DataTypes.STRING,
  }, {
    tableName: 'products',
    underscored: true,
    timestamps: false,
    onDelete: 'CASCADE',
  });

  ProductTable.associate = (models) => {
    ProductTable.hasMany(models.SaleProduct, {
      as: 'product',
      foreignKey: 'product_id',
    });
  }

  return ProductTable;
}

module.exports = ProductSchema;

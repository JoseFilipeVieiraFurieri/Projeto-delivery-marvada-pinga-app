const { NOW } = require("sequelize");

const SaleSchema = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.STRING, foreignKey: true },
    sellerId: { type: DataTypes.STRING, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(5, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { 
      type: DataTypes.DATE,
      defaultValue: NOW(),
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente'
    }
  }, {
    tableName: 'sales',
    underscored: true,
    timestamps: false,
    onDelete: 'CASCADE',
  });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
    SaleTable.belongsTo(models.User, {
      as: 'userSeller',
      foreignKey: 'seller_id',
    });
    SaleTable.hasMany(models.SaleProduct, {
      as: 'sale',
      foreignKey: 'sale_id',
    });
  }

  return SaleTable;
}

module.exports = SaleSchema;




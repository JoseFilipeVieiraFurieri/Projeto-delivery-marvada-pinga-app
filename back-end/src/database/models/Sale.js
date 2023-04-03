const SaleSchema = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.STRING, foreignKey: true },
    sellerId: { type: DataTypes.STRING, foreignKey: true },
    totalPrice: DataTypes.FLOAT,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { 
      type: DataTypes.DATE,
      defaultValue: Date.now(),
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




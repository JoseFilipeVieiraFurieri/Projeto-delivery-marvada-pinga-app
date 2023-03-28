const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'customer',
    },
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
    onDelete: 'CASCADE',
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Sale, {
      as: 'user',
      foreignKey: 'user_id',
    });
    UserTable.hasMany(models.Sale, {
      as: 'userSeller',
      foreignKey: 'seller_id',
    });
  }

  return UserTable;
}

module.exports = UserSchema;
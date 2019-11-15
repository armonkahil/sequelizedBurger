module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('burgers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    customer_name: {
      type: DataTypes.STRING,
      defaultValue: 'anonymous',
      validate: {
        len: [1]
      }
    }
  })
  return Burger
}

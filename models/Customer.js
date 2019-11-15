module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'Armon',
      validate: {
        len: [1]
      }
    }
  })
  return Customer
}

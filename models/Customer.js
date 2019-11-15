module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
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

var Sequelize = require('sequelize')
var sequelize = require('../config/connection.js')

var Burger = sequelize.define('burgers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  burger_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
},
{
  freezeTableName: true
}
)
Burger.sync()
module.exports = Burger

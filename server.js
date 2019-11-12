// =============================================================================
// dependencies
// =============================================================================
const express = require('express')
const exphbs = require('express-handlebars')
const chalk = require('chalk')
const normal = chalk.hex('#F58148')
var app = express()
var PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(express.json())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

require('./routes/apiRoutes.js')(app)
const db = require('./models')
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(normal('App listening on http://localhost:' + PORT))
  })
})

// var Sequelize = require('sequelize')
// var sequelize

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL)
// } else {
//   sequelize = new Sequelize('burgers_db', 'root', 'password', {
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   })
// }
// module.exports = sequelize
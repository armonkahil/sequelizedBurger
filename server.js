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

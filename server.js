// =============================================================================
// dependencies
// =============================================================================
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers_controller')
const chalk = require('chalk')
const normal = chalk.hex('#F58148')
var app = express()

var PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(express.json())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(routes)

app.listen(PORT, function () {
  console.log(normal('App listening on http://localhost:' + PORT))
})

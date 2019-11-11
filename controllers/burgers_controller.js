var express = require('express')
var router = express.Router()
var Burger = require('../models/burger')

router.get('/', function (req, res) {
  Burger.findAll({}).then(function (data) {
    var handlebarsOBj = {
      burgers: data
    }
    res.render('index', handlebarsOBj)
  }
  )
})

router.post('/api/burgers/:burger', function (req, res) {
  var newBurger = {

  }
  console.log('new burger in controller', newBurger)

  Burger.create({
    burger_name: req.params.burger,
    devoured: false
  }).then(function (result) {
    // Send back the ID of the new quote
    res.redirect('/')
  })
})

router.put('/api/burgers/:id', function (req, res) {
  var eaten = req.params.id
  console.log('burger devoured', eaten)
  Burger.update({ devoured: true },
    { burger_name: eaten }).then(function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})

module.exports = router

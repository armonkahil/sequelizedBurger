
var db = require('../models')

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.burgers.findAll({}).then(function (data) {
      var handlebarsOBj = {
        burgers: data
      }
      res.render('index', handlebarsOBj)
    }
    )
  })

  app.post('/api/burgers/:burger', function (req, res) {
    db.burgers.create({
      burger_name: req.params.burger,
      devoured: false
    }).then(function (result) {
    // Send back the ID of the new quote
      res.redirect('/')
    })
  })

  app.put('/api/burgers/:id', function (req, res) {
    var eaten = req.params.id
    db.burgers.update(
      { devoured: true },
      {
        where: {
          burger_name: eaten
        }
      }
    ).then(function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end()
      } else {
        res.status(200).end()
      }
    })
  })
}

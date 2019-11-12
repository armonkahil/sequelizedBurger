
const db = require('../models')

module.exports = (app) => {
  app.get('/', (req, res) => {
    db.burgers.findAll({
      order: [
        ['burger_name', 'ASC']
      ]
    }).then((data) => {
      const handlebarsOBj = {
        burgers: data
      }
      res.render('index', handlebarsOBj)
    }
    )
  })

  app.post('/api/burgers/:burger', (req, res) => {
    db.burgers.create({
      burger_name: req.params.burger,
      devoured: false
    }).then((result) => {
    // Send back the ID of the new quote
      res.redirect('/')
    })
  })

  app.put('/api/burgers/:id', (req, res) => {
    const eaten = req.params.id
    db.burgers.update(
      { devoured: true },
      {
        where: {
          burger_name: eaten
        }
      }
    ).then((result) => {
      if (result.changedRows === 0) {
        return res.status(404).end()
      } else {
        res.status(200).end()
      }
    })
  })
}

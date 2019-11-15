
const db = require('../models')

module.exports = (app) => {
  app.get('/', (req, res) => {
    db.burgers.findAll({
      order: [
        ['burger_name', 'ASC']
      ]
    }).then((data) => {
      const dataArray = []
      for (let i = 0; i < data.length; i++) {
        console.log('data', data[i].dataValues)
        dataArray.push(data[i].dataValues)
      }
      const handlebarsOBj = {
        burgers: dataArray
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
      console.table(result)
      res.render('partials/burgers/burger-unblocked')
    })
  })

  app.put('/api/burgers/:id/:customer', (req, res) => {
    const eaten = req.params.id
    const customer = req.params.customer
    db.burgers.update(
      {
        devoured: true,
        customer_name: customer
      },
      {
        where: {
          burger_name: eaten
        }
      }
    ).then((result) => {
      console.table('api routes', result)
      res.render('partials/burgers/burger-unblocked')
    })
  })

  app.delete('/api/burgers/:id', function (req, res) {
    const burgerID1 = req.params.id
    console.log('destroy call', burgerID1)
    db.burgers.destroy({
      where: {
        id: burgerID1
      }
    }).then(function (result) {
      res.render('partials/burgers/burger-unblocked')
    })
  })

  app.delete('/api/burgers/devoured/:id', function (req, res) {
    const burgerID = req.params.id
    console.log(burgerID)
    db.burgers.destroy({
      where: {
        id: burgerID
      }
    }).then(function (result) {
      res.render('partials/burgers/burger-blocked')
    })
  })
}

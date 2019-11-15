
const db = require('../models')

module.exports = (app) => {
  app.get('/', (req, res) => {
    db.burgers.findAll({
      order: [
        ['burger_name', 'ASC']
      ]
    }).then((data) => {
      let dataArray  = []
      for (let i = 0; i < data.length; i++) {
        console.log('data', data[i].dataValues)
        dataArray.push(data[i].dataValues)
      }
      const { burger_name } = data
      console.log('burger name', burger_name)
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
      console.table('api routes', result)
      res.render('partials/burgers/burger-unblocked')
    })
  })

  app.delete('/api/burgers/:name', function (req, res) {
    const name = req.params.name
    console.log('destroy call', name)
    db.burgers.destroy({
      where: {
        burger_name: name
      }
    }).then(function (result) {
      res.render('partials/burgers/burger-unblocked')
    })
  })

  app.delete('/api/burgers/devoured/:name', function (req, res) {
    const name = req.params.name
    console.log(name)
    db.burgers.destroy({
      where: {
        burger_name: name
      }
    }).then(function (result) {
      res.render('partials/burgers/burger-blocked')
    })
  })
}

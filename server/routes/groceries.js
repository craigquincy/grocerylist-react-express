var express = require('express');
var router = express.Router();

const knex = require('../knex')

router.post('/', (req, res, next) => {
  let { name, quantity } = req.body
  quantity = parseInt(quantity)

    console.log("POST", req.body, name, quantity)
  knex('groceries')
    .insert({ name, quantity }, '*')
    .then(data => {
      res.json(data[0])
    })
})

router.get('/', function(req, res, next) {
  knex('groceries').then(results => {
    res.json(results);
  })
});

router.get('/:id', function(req, res, next) {
  let { id } = req.params
  knex('groceries').where('id', id).then(results => {
    res.json(results);
  })
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  let { name, quantity } = req.body
  quantity = parseInt(quantity)

  knex('groceries')
    .where('id', id)
    .returning('*')
    .update({ name, quantity })
    .then(data => {
      res.json(data)
    })
})

router.delete('/:id', function(req, res, next) {
  let { id } = req.params
  knex('groceries').where('id', id).delete().then(results => {
    res.json({message: 'deleted'});
  })
});

const notFound = () => {
}

module.exports = router;

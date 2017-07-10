const express = require('express')
const router = express.Router()
const Item = require('../db/schema').Item
const Machine = require('../db/schema').Machine

router.post('/api/vendor/items', function (req, res) {
  let item = new Item()
  item.cost = 35
  item.save()
  .then(function (item) {
    res.json(item)
  })
  .catch(function (error) {
    res.status(404).json(error) // sends error in json format
  })
})

module.exports = router


// router.get('/api', function (req, res) {
//   return res.json()
// })

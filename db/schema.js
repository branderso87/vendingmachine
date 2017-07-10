const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  id: {
    type: Objectid,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    date: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    date: Date.now
  }
})

const customerSchema = new mongoose.Schema({

})

const machineSchema = new mongoose.Schema({
  funds: {
    type: Number,
    required: true
  },
  purchases: [{
    type: String,
    required: true}]
})

module.exports = {
  Item: mongoose.model('Item', itemSchema),
  Machine: mongoose.model('Machine', machineSchema)
}

// ./models/Order.js
const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    buyer: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  { timestamps: true, versionKey: false }
)

const User = mongoose.model('Order', OrdersSchema)

module.exports = User

// ./models/Order.js
const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema(
  {
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    orders: [
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

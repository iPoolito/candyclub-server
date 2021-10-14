// ./models/Product.js
const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    price: {
      type: String,
      required: [true, 'Price is required']
    },
    description: {
      type: String
    },
    imageUrl: {
      type: String
    },
    category: {
      type: String
    },
    brand: {
      type: String
    },
    featured: {
      type: Boolean
    },
    stock: {
      type: Number
    }
  },
  { timestamps: true, versionKey: false }
)

const User = mongoose.model('Product', ProductsSchema)

module.exports = User

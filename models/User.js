// ./models/User.js
const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    hashedPassword: {
      type: String,
      required: [true, 'Password is required']
    },
    name: {
      type: String
    },
    adress: {
      street: { type: String, default: '' },
      suburb: { type: String, default: '' },
      cp: { type: String, default: '' },
      town: { type: String, default: '' },
      state: { type: String, default: '' }
    },
    role: {
      type: String,
      default: 'user'
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ],
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  },
  { timestamps: true, versionKey: false }
)

const User = mongoose.model('User', UsersSchema)

module.exports = User

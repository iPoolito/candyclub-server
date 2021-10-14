const Product = require('./../models/Product')
const Order = require('./../models/Order')
const User = require('./../models/User')

exports.createOrder = async (req, res) => {
  try {
    const { order } = req.body
    const { products, buyer } = order

    const idProducts = products.map(el => el._id)

    const newOrder = await Order.create({ products: idProducts, buyer: buyer._id })

    const UserOrder = await User.findByIdAndUpdate(buyer._id, { $push: { orders: newOrder._id } })

    return res.json({
      data: {
        order: newOrder
      }
    })
  } catch (error) {
    console.log(error)
  }
}

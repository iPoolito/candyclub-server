const Product = require('./../models/Product')
const Order = require('./../models/Order')
const User = require('./../models/User')

const axios = require('axios')

exports.createOrder = async (req, res) => {
  try {
    const { order } = req.body
    const { products, buyer, buyerAddress } = order

    const idProducts = products.map(el => el._id)

    const newOrder = await Order.create({ products: idProducts, buyer: buyer._id })

    const UserOrder = await User.findByIdAndUpdate(buyer._id, { $push: { orders: newOrder._id }, adress: buyerAddress })

    return res.json({
      data: {
        order: newOrder
      }
    })
  } catch (error) {
    console.log(error)
  }
}

exports.payment = async (req, res) => {
  const { items } = req.body

  try {
    const preference = {
      items,
      notification_url: 'https://webhook.site/282d1a97-269a-4778-ab6d-f21cc0e7a423',
      back_urls: {
        success: `${process.env.FRONTEND_ENDPOINT}/orden/exito`,
        failure: `${process.env.FRONTEND_ENDPOINT}/orden/declinado`,
        pending: `${process.env.FRONTEND_ENDPOINT}/orden/pendiente`
      }
    }

    const { data } = await axios.post('https://api.mercadopago.com/checkout/preferences', preference, {
      headers: {
        Authorization: `Bearer ${process.env.MP_TOKEN}`
      }
    })

    console.log({ data })

    return res.json({
      data
    })
  } catch (error) {
    console.log(error)
  }
}

// ./routes/products.js
const express = require('express')
const router = express.Router()
const authorization = require('./../middlewares/authorization')

const ordersController = require('./../controllers/ordersController')

// CRUD
// POST - Orden - CREAR UNA ORDEN
router.post('/create-order', authorization, ordersController.createOrder)

module.exports = router

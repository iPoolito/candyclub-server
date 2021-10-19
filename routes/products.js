// ./routes/products.js
const express = require('express')
const router = express.Router()

const productsController = require('./../controllers/productsController')

// CRUD
// GET - PETS - OBTENER TODOS LOS PRODUCTOS
router.get('/get-all', productsController.getAllProducts)

// POST - PET - CREAR UN PRODUCTO
router.post('/create', productsController.createProduct)

// PUT - PET - ACTUALIZAR UNA PRODUCTO
router.put('/update', productsController.updateProduct)

// DELETE - PET - BORRAR UN PRODUCTO
router.delete('/delete', productsController.deleteProduct)

// GET - PETS - OBTENER PRODUCTOS FEATURE
router.get('/get-featured', productsController.getFeaturedProducts)

module.exports = router

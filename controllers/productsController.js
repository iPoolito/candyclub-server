// ./controllers/productsController.js

const Product = require('./../models/Product')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})

    console.log(products)

    return res.json({
      data: products
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      data: null,
      errorMsg: 'Hubo un error interno. Estamos arreglándolo lo más pronto posible.'
    })
  }
}

exports.createProduct = async (req, res) => {
  // OBTENER LOS DATOS DEL FORMULARIO
  const { name, price, description, imageUrl, category, brand, featured, stock } = req.body

  try {
    const newProduct = await Product.create({
      name,
      price,
      description,
      imageUrl,
      category,
      brand,
      featured,
      stock
    })

    res.json({
      data: newProduct,
      msg: 'Producto creado Exitosamente'
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      errormsg: 'Hubo un error al crear el producto'
    })
  }
}

exports.updateProduct = async (req, res) => {
  const { id, name, price, description, imageUrl, category, brand, featured, stock } = req.body

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        imageUrl,
        category,
        brand,
        featured,
        stock
      },
      { new: true }
    ) // DEVUELVE LOS DATOS ACTUALIZADOS

    return res.json({
      data: updatedProduct
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      msgError: 'Hubo un error actualizando el Producto.'
    })
  }
}

exports.deleteProduct = async (req, res) => {
  const { id } = req.body

  try {
    const deletedProduct = await Product.findByIdAndRemove({ _id: id })

    return res.json({
      data: deletedProduct,
      msg: 'Este Producto fue borrado exitosamente.'
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      msgError: 'Hubo un error borrando el producto.'
    })
  }
}

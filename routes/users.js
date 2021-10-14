// ./routes/users.js

const express = require('express')
const router = express.Router()

const { check } = require('express-validator')

const usersController = require('./../controllers/usersController')

// CRUD DE USUARIOS
// GET - USERS - OBTENER TODOS LOS USUARIOS PARA LOS ADMINS
/**
 * 1. SOLO LOS ADMINS PUEDEN ACCEDER A TODOS LOS USUARIOS
 * 2. PEDIR AUTENTICACIÓN DE ADMIN
 */

// POST - USER - CREAR UN USUARIO
router.post(
  '/create',
  [
    check('username', 'El nombre es obligatorio.').not().isEmpty(), // VERIFICAR QUE UNA CASILLA NO ESTÉ VACÍA
    check('email', 'Agrega un email válido').isEmail(),
    check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 })
  ],
  usersController.createUser
)

// PUT - USER - ACTUALIZAR UN USUARIO
/**
 * - SOLO LOS MISMOS USUARIOS PUEDEN ACTUALIZAR SUS DATOS
 */

// DELETE - USER - BORRAR UN USUARIO
/**
 * - SOLO LOS ADMINS PUEDEN BORRAR AL USUARIO
 */

module.exports = router

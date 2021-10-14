// ./routes/auth.js

const express = require('express')
const router = express.Router()

const authController = require('./../controllers/authController')

const authorization = require('./../middlewares/authorization')

const { check } = require('express-validator')

// RUTAS DE AUTENTICACIÓN
// SIRVEN PARA ENTREGAR CREDENCIALES Y PARA VERIFICAR CREDENCIALES

// INICIAR SESIÓN - ENTREGAR CREDENCIALES
// POST - AUTH - VERIFICAR QUE EL USUARIO ES EL MISMO QUE CREÓ ESA CUENTA QUE ELLA/ÉL DICE TENER

router.post(
  '/login',
  [
    check('email', 'Ingresa un email válido').isEmail(),
    check('password', 'No enviaste un password adecuado.').not().isEmpty()
  ],
  authController.loginUser
)

// VERIFICAR TOKEN - EL USUARIO ENVÍO UNA CREDENCIAL. HAY QUE REVISAR QUE NO ESTÁ CORRUPTA Y QUE ES CORRECTA
router.get('/verifying-token', authorization, authController.verifyingToken)

module.exports = router

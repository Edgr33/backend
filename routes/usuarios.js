const express = require('express')
const router = express.Router() 

const controller = require('../controller/usuarios')

router.get('/users', controller.getUser)
router.get('/menores', controller.getMenoresEdad)
router.get('/mayores', controller.getMayoresEdad)
router.post('/user', controller.addUser)
router.delete('/user/:userName', controller.deleteUser)

module.exports = router
const express = require('express')
const router = express.Router() 

const calculadora = require('../controller/calculadora')

router.get('/suma/:a&:b', calculadora.suma)
router.get('/resta/:a&:b', calculadora.resta)
router.get('/multiplicacion/:a&:b', calculadora.multiplicacion)
router.get('/division/:a&:b', calculadora.division)
router.get('/potencia/:a&:b', calculadora.potencia)
router.get('/resultados/:a&:b', calculadora.resultados)

module.exports = router
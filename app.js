const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//archivos de rutas
const monitoringRouter = require('./routes/monitoring')
const calculadoraRouter = require('./routes/calculadora')
const usersRouter = require('./routes/usuarios')

app.use(bodyParser.json({
  limit: '100mb'
}))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

//cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//rutas
app.use('/api', monitoringRouter)
app.use('/api', calculadoraRouter)
app.use('/api', usersRouter)

module.exports = app;


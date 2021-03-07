const app = require('./app')
const port = 8888


app.listen(port, () => {
  console.log('server ok')
  console.log(`Listening on ${PORT}`)
})
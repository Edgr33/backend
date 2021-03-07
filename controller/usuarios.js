var users = [
  {
    nombre: 'gabriel',
    apellido: 'morales',
    edad: 17,
  },
  {
    nombre: 'nicolas',
    apellido: 'morales',
    edad: 18,
  },
  {
    nombre: 'andres',
    apellido: 'morales',
    edad: 20,
  },
  {
    nombre: 'tomas',
    apellido: 'morales',
    edad: 30,
  },
]

const controller = {
  getUser: function (request, response){
    return response.status(200).send(users)
  },

  getMenoresEdad: function (request, response){
    const menores = users.filter(user => user.edad < 18)

    return response.status(200).send(menores)
  },

  getMayoresEdad: function (request, response){
    const mayores = users.filter(user => user.edad >= 18)

    return response.status(200).send(mayores)
  },

  addUser: function (request, response){
    const params = request.body

    const nuevoUsuario = {
      nombre: params.nombre,
      apellido: params.apellido,
      edad: params.edad
    }

    users.push(nuevoUsuario)

    return response.status(200).send(users)
  },

  deleteUser: function (request, response){
    const userName = request.params.userName
    const indiceEliminar = users.findIndex(user => user.nombre === userName)

    users.splice(indiceEliminar, 1)

    return response.status(200).send(users)
  }
}



module.exports = controller
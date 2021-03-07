const controller = {

  suma: function (request, response) {

    let a = controller.conversionNumero(request.params.a)
    let b = controller.conversionNumero(request.params.b)
    

    return a && b ? response.status(200).send({suma: a+b}) : response.status(501).send({message: 'debe ingresar dos numeros'})
  },

  resta: function (request, response) {
    let a = controller.conversionNumero(request.params.a)
    let b = controller.conversionNumero(request.params.b)
    

    return a && b ? response.status(200).send({resta: a-b}) : response.status(501).send({message: 'debe ingresar dos numeros'})
  },

  multiplicacion: function(request, response) {
    let a = controller.conversionNumero(request.params.a)
    let b = controller.conversionNumero(request.params.b)
    
 
    return a && b ? response.status(200).send({multiplicacion: a*b}) : response.status(501).send({message: 'debe ingresar dos numeros'})
  },

  division: function(request, response){
    let a = controller.conversionNumero(request.params.a)
    let b = controller.conversionNumero(request.params.b)
    

    return a && b ? response.status(200).send({division: a/b}) : response.status(501).send({message: 'debe ingresar dos numeros'})
  },

  potencia: function (request, response){
    let a = controller.conversionNumero(request.params.a)
    let b = controller.conversionNumero(request.params.b)
    
    return a && b ? response.status(200).send({potencia: Math.pow(a, b)}) : response.status(501).send({message: 'debe ingresar dos numeros'})
  },

  resultados: function (request, response){
    let a = controller.conversionNumero(request.params.a)
    let b = controller.conversionNumero(request.params.b)

    const suma = a + b
    const resta = a - b
    const multiplicacion = a * b
    const division = a / b
    const potencia = Math.pow(a, b)

    return a && b ? response.status(200).send({suma, resta, multiplicacion, division, potencia}) : response.status(501).send({message: 'debe ingresar dos numeros'})

  },

  validacion: function (num){
    return !isNaN(num)
  },

  conversionNumero: function (numero){
    if (controller.validacion(numero)){
      return parseInt(numero) 
    } else {
      return null
    }
  }

}

module.exports = controller
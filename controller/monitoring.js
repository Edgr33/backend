const os = require('os')


const controller = {

  monitoringCpu: function (request, response){
    return response.status(200).send(os.cpus()) 
  },

  monitoringRam: function (request, response){
    console.log(request)
    let ram = os.freemem()
    let ramKb = ram / 1024
    let ramMb = ramKb / 1024
    let ramGb = ramMb / 1024
    return response.status(200).send({memoriaLibre: ram, ramKb, ramMb, ramGb})
  }
}

module.exports = controller
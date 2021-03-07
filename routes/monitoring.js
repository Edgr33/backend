const express = require('express')
const router = express.Router() 

const controller = require('../controller/monitoring')


router.get('/cpu', controller.monitoringCpu)
router.get('/ram', controller.monitoringRam)



module.exports = router
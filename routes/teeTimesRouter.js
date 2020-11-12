const express = require('express')
const router = express.Router()

const teeTimeController = require('../controllers/teeTimeController')

router.get('/', teeTimeController.index) // Incoming GET requests to / path (home page)
router.post('/', teeTimeController.getAvailableTeeTimes)

module.exports = router
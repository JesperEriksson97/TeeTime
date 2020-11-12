const express = require('express')
const router = express.Router()

const teeTimeController = require('../controllers/teeTimeController')

router.get('/', teeTimeController.index) // Incoming GET requests to / path (home page)
router.post('/', teeTimeController.renderDateForm)
router.post('/player-information', teeTimeController.getPlayerData)
router.post('/get-available-times', teeTimeController.getAvailableTeeTimes)

module.exports = router
const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

router.get('/', homeController.index) // Incoming GET requests to / path (home page)

module.exports = router
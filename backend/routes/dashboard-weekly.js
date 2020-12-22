const path = require('path')

const express = require('express')

const dashWeeklyController = require('../controllers/dashboard-weekly')

const router = express.Router()

router.get('/dash-weekly', dashWeeklyController.getUserFinances)

// router.post('/dash-weekly', dashWeeklyController.postUserFinances)

module.exports = router

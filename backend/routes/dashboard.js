const path = require('path')

const express = require('express')

const dashWeeklyController = require('../controllers/dashboard-weekly')
const dashMonthlyController = require('../controllers/dashboard-monthly')

const router = express.Router()

router.get('/:startDate/:endDate', dashWeeklyController.getUserFinances)

router.post('/', dashWeeklyController.postUserFinances)

router.patch('/', dashWeeklyController.editFinanceEntryById)

router.get('/:id', dashWeeklyController.getFinanceDetailsById)

router.delete('/:id', dashWeeklyController.deleteFinanceEntryById)

module.exports = router

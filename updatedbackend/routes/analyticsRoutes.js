const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/analytics/users', analyticsController.getUserStatistics);
router.get('/analytics/appointments', analyticsController.getAppointmentStatistics);

module.exports = router;

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

// authMiddleware for routes that needs authentication
router.get('/dashboard/appointments', authMiddleware, dashboardController.getUpcomingAppointments);
router.get('/dashboard/services', authMiddleware, dashboardController.getSubscribedServices);

module.exports = router;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const appointmentController = require('../controllers/appointmentController');

router.get('/appointments', authMiddleware, appointmentController.getAppointments);
router.post('/appointments', authMiddleware, appointmentController.scheduleAppointment);
router.put('/appointments/:id', authMiddleware, appointmentController.updateAppointment);
router.delete('/appointments/:id', authMiddleware, appointmentController.cancelAppointment);

module.exports = router;

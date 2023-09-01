const User = require('../models/User');
const Appointment = require('../models/Appointment');
const UserService = require('../models/UserService');

// GET /api/dashboard/appointments
exports.getUpcomingAppointments = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from authMiddleware
    // logic to get upcoming appointments based on the data model
    const upcomingAppointments = await Appointment.find({ user: userId, date: { $gte: new Date() } });
    res.json(upcomingAppointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching upcoming appointments' });
  }
};

// GET /api/dashboard/services
exports.getSubscribedServices = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from authMiddleware
    // logic to get subscribed services based on the data model
    const userServices = await UserService.find({ user: userId });
    res.json(userServices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscribed services' });
  }
};

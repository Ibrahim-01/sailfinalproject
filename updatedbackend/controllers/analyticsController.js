const User = require('../models/User');
const Appointment = require('../models/Appointment');

// GET /api/analytics/users
exports.getUserStatistics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    // Calculate the number of active users (users who logged in within the last 30 days)
    const activeUsers = await User.countDocuments({
      lastLogin: { $gte: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) },
    });

    // Calculate the number of new users (users registered within the last 30 days)
    const newUsers = await User.countDocuments({
      createdAt: { $gte: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) },
    });

    res.json({ totalUsers, activeUsers, newUsers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user statistics' });
  }
};

// GET /api/analytics/appointments
exports.getAppointmentStatistics = async (req, res) => {
  try {
    const totalAppointments = await Appointment.countDocuments();

    // Calculate the average number of appointments per user
    const avgAppointmentsPerUser = totalAppointments / (await User.countDocuments());

    // Calculate the busiest day for appointments
    const busiestDay = await Appointment.aggregate([
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ]);

    res.json({ totalAppointments, avgAppointmentsPerUser, busiestDay });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointment statistics' });
  }
};

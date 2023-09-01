const Appointment = require('../models/Appointment');

exports.getAppointments = async (req, res) => {
  try {
    const userId = req.userId;
    const appointments = await Appointment.find({ user: userId });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
};

exports.scheduleAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const { service, date } = req.body;

    const newAppointment = new Appointment({ user: userId, service, date });
    await newAppointment.save();

    res.status(201).json({ message: 'Appointment scheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling appointment' });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const { service, date } = req.body;

    await Appointment.findByIdAndUpdate(appointmentId, { service, date });

    res.json({ message: 'Appointment updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment' });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    await Appointment.findByIdAndDelete(appointmentId);

    res.json({ message: 'Appointment canceled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error canceling appointment' });
  }
};

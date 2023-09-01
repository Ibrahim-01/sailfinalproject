const Service = require('../models/Service');

// GET /api/admin/services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services' });
  }
};

// POST /api/admin/services
exports.createService = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newService = new Service({ name, description });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding service' });
  }
};

// PUT /api/admin/services/:id
exports.updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { name, description } = req.body;
    await Service.findByIdAndUpdate(serviceId, { name, description });
    res.json({ message: 'Service updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating service' });
  }
};

// DELETE /api/admin/services/:id
exports.deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    await Service.findByIdAndDelete(serviceId);
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service' });
  }
};

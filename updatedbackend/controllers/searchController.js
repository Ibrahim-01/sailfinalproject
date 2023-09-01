const Service = require('../models/Service');

// GET /api/services/search
exports.searchServices = async (req, res) => {
  try {
    const { keywords } = req.query;
    const services = await Service.find({ $text: { $search: keywords } });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error searching services' });
  }
};

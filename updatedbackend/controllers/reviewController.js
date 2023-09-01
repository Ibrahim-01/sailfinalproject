const Review = require('../models/Review');

// POST /api/services/:id/reviews
exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const serviceId = req.params.id;
    const newReview = new Review({ service: serviceId, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review' });
  }
};

// GET /api/services/:id/reviews
exports.getReviews = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const reviews = await Review.find({ service: serviceId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};

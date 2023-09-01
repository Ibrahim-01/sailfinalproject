const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/services/:id/reviews', reviewController.addReview);
router.get('/services/:id/reviews', reviewController.getReviews);

module.exports = router;

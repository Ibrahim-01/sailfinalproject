const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/services/search', searchController.searchServices);

module.exports = router;

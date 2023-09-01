const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminMiddleware = require('../middleware/adminMiddleware');

// adminMiddleware for routes that require admin access
router.get('/services', adminMiddleware, adminController.getAllServices);
router.post('/services', adminMiddleware, adminController.createService);
router.put('/services/:id', adminMiddleware, adminController.updateService);
router.delete('/services/:id', adminMiddleware, adminController.deleteService);

module.exports = router;
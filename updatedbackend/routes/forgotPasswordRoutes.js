const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPasswordController');

router.post('/forgot-password', forgotPasswordController.forgotPassword);
router.post('/reset-password/:token', forgotPasswordController.resetPassword);

module.exports = router;

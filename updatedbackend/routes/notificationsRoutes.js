const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');

router.post('/notifications/subscribe', notificationsController.subscribe);
router.post('/notifications/unsubscribe', notificationsController.unsubscribe);

module.exports = router;

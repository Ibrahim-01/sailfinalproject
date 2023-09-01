const User = require('../models/User');

// POST /api/notifications/subscribe
exports.subscribe = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from authMiddleware
    const { topic } = req.body; // The notification topic to subscribe to

    // Update the user's subscription data in the database
    await User.findByIdAndUpdate(userId, { $addToSet: { subscriptions: topic } });

    res.json({ message: 'Subscribed to notifications successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error subscribing to notifications' });
  }
};

// POST /api/notifications/unsubscribe
exports.unsubscribe = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from authMiddleware
    const { topic } = req.body; // The notification topic to unsubscribe from

    // Update the user's subscription data in the database
    await User.findByIdAndUpdate(userId, { $pull: { subscriptions: topic } });

    res.json({ message: 'Unsubscribed from notifications successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error unsubscribing from notifications' });
  }
};

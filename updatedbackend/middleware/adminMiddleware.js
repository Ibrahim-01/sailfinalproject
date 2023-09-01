const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const userId = req.userId; // Extracted from authMiddleware

    // Find the user by their ID
    const user = await User.findById(userId);

    // Check if the user is an admin
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Only admins are allowed.' });
    }

    // If user is admin, allow access to the next middleware or route
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error checking admin privileges' });
  }
};

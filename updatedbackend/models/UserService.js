const mongoose = require('mongoose');

const userServiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service', // Reference to the Service model
    required: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserService = mongoose.model('UserService', userServiceSchema);

module.exports = UserService;

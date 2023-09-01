const dotenv = require("dotenv").config();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');

// POST /api/forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a unique token for password reset
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Set token expiration (e.g., 1 hour from now)
    const resetTokenExpiry = Date.now() + 3600000;

    // Update user with reset token and token expiry
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    // Create a transporter using the email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, // this wil be our email
        pass: process.env.EMAIL_PASSWORD, // this also will be our password
      },
    });

    // Define email content
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: user.email,
      subject: 'Password Reset Request',
      text: `You are receiving this email because you (or someone else) have requested a password reset for your account.\n\n
      Please click on the following link or paste it into your browser to reset your password:\n\n
      ${process.env.CLIENT_URL}/reset-password/${resetToken}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error initiating forgot password process' });
  }
};

// POST /api/reset-password/:token
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    // Find user by reset token and check token expiry
    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Update user's password and clear reset token fields
    user.password = newPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password' });
  }
};

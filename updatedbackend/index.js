const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require('./routes/adminRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const forgotPasswordRoutes = require('./routes/forgotPasswordRoutes');
const notificationsRoutes = require('./routes/notificationsRoutes');
const searchRoutes = require('./routes/searchRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

dotenv.config();
const PORT = process.env.PORT || 3000;


//connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB successfully connected"))
  .catch((error) => console.error("Error connecting to DB:", error));

// routes & middlewares
// those two middlewares make req.body accessible, otherwise it would be undefined!!!
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/api", appointmentRoutes);
app.use('/api', reviewRoutes);
app.use('/api', dashboardRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', forgotPasswordRoutes);
app.use('/api', notificationsRoutes);
app.use('/api', searchRoutes);
app.use('/api', analyticsRoutes);

//start server
app.listen(process.env.PORT, () => console.log(`server started successfully on port ${PORT}`));

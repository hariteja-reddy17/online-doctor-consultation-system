require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const errorHandler = require("./utils/errorHandler");

const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.use("/api/users", userRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

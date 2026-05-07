const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  approveAppointment,
  rejectAppointment,
} = require("../controllers/appointmentController");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/book", bookAppointment);

router.get("/", getAppointments);

router.put(
  "/approve/:id",
  authMiddleware,
  roleMiddleware("doctor", "admin"),
  approveAppointment,
);

router.put(
  "/reject/:id",
  authMiddleware,
  roleMiddleware("doctor", "admin"),
  rejectAppointment,
);

module.exports = router;

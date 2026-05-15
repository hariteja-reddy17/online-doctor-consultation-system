const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  approveAppointment,
  rejectAppointment,
} = require("../controllers/appointmentController");

router.post("/", bookAppointment);

router.get("/", getAppointments);

router.put("/approve/:id", approveAppointment);

router.put("/reject/:id", rejectAppointment);

module.exports = router;

const Appointment = require("../models/Appointment");

const bookAppointment = async (req, res) => {
  try {
    const { patientName, doctorName, date } = req.body;

    const appointment = new Appointment({
      patientName,
      doctorName,
      date,
      status: "pending",
    });

    await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const approveAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, {
      status: "approved",
    });

    res.json({
      message: "Appointment approved",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const rejectAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, {
      status: "rejected",
    });

    res.json({
      message: "Appointment rejected",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  approveAppointment,
  rejectAppointment,
};

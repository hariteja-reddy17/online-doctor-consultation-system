const Doctor = require("../models/Doctor");

const addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);

    await doctor.save();

    res.status(201).json({
      message: "Doctor added successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addDoctor,
  getDoctors,
};

const express = require("express");

const router = express.Router();

const { addDoctor, getDoctors } = require("../controllers/doctorController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/add", authMiddleware, roleMiddleware("admin"), addDoctor);

router.get("/", getDoctors);

module.exports = router;

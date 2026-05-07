const express = require("express");

const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

const { registerValidation, validate } = require("../validators/userValidator");

router.post("/register", registerValidation, validate, registerUser);

router.post("/login", loginUser);

router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Protected profile accessed",
    user: req.user,
  });
});

module.exports = router;

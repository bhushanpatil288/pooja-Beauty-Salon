const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth.controller")
const { signupValidation } = require("../middlewares/formValidation")


router.post("/signup", signupValidation, signup);

module.exports = router;
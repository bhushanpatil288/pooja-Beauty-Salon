const express = require("express");
const router = express.Router();
const { signup, logout, login } = require("../controllers/auth.controller")
const { signupValidation, loginValidation } = require("../middlewares/formValidation")
const { userAuth } = require("../middlewares/auth")

router.post("/signup", signupValidation, signup);
router.post("/logout", logout);
router.post("/login", loginValidation, login);
router.get("/user", userAuth, (req, res) => {
    res.json(req.user);
})

module.exports = router;
const express = require("express");
const router = express.Router();
const { signup, logout } = require("../controllers/auth.controller")
const { signupValidation } = require("../middlewares/formValidation")
const { userAuth } = require("../middlewares/auth")

router.post("/signup", signupValidation, signup);
router.post("/logout", logout);
router.get("/user", userAuth, (req, res) => {
    res.json(req.user);
})

module.exports = router;
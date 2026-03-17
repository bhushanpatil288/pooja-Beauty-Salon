const express = require("express");
const router = express.Router();
const { showAllAppointments } = require("../controllers/appointment.controller")

router.get("/all", showAllAppointments)

module.exports = router;
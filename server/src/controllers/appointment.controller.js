const Appointment = require("../models/appointment.model");
const showAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.send(appointments);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports = { showAllAppointments };
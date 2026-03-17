const serviceModel = require("../models/service.model");

const showAllServices = async (req, res) => {
    try {
        const services = await serviceModel.find().sort({ "name": 1 });
        res.send(services);
    } catch (e) {
        res.send(e);
    }
}

module.exports = { showAllServices };
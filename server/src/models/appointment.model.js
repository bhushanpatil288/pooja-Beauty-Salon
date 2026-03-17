const mongoose = require("mongoose");

const status = ['booked', 'completed', 'cancelled'];

const appointmentModel = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: status,
        default: 'booked',
    },
    notes: {
        type: String,
        trim: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service"
    }
}, { timestamps: true });

module.exports = mongoose.model('appointment', appointmentModel);
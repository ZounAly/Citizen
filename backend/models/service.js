const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    serviceCharges: { type: Number, required: true },  // Added field
    mileCharges: { type: Number, required: true },      // Added field
    misCharges: { type: Number, required: true },       // Added field
    softDelete: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const featureSchema = new mongoose.Schema({
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    feature: { type: String, required: true },  // Simple feature field
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feature', featureSchema);

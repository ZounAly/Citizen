const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceImagesSchema = new mongoose.Schema({
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    url: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceImages', serviceImagesSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const faqsSchema = new mongoose.Schema({
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Faqs', faqsSchema);

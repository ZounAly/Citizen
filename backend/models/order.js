const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  distance: { type: Number, required: true },
  totalCharges: { type: Number, required: true },
  orderStatus: { type: String, enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'], default: 'Pending' },
  createdOn: { type: Date, default: Date.now },
  completedOn: { type: Date, default: null },
});

module.exports = mongoose.model('Order', orderSchema);
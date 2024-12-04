const asyncHandler = require('express-async-handler');
const Service = require('../models/service.js');
const Order = require('../models/order.js');
const path = require('path');

const createOrder = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    phone,
    serviceId,
    latitude,
    longitude,
    distance,
    totalCharges,
  } = req.body;

  // Validate required fields
  if (!fullName || !email || !phone || !serviceId || !totalCharges) {
    return res.status(400).json({ message: "All required fields must be provided" });
  }

  // Check if the service exists
  const service = await Service.findById(serviceId);
  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  // Create the order
  const order = await Order.create({
    fullName,
    email,
    phone,
    serviceId,
    latitude,
    longitude,
    distance,
    totalCharges,
    orderStatus: "Pending",
    createdOn: new Date(),
    completedOn: null,
  });

  res.status(201).json(order);
});

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('serviceId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders', details: error.message });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate('serviceId');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the order', details: error.message });
  }
};

module.exports = { createOrder, getAllOrders, getOrderById };

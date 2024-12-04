const express = require('express');
const {
  createOrder, getAllOrders, getOrderById
} = require('../controllers/orderController');

const router = express.Router();

// @route   POST /api/orders
// @desc    Create a new order
// @access  Public
router.post('/', createOrder);

// @route   GET /api/orders/:id
// @desc    Get a single order by ID
// @access  Public
router.get('/:id', getOrderById);

// @route   GET /api/orders/:title
// @desc    Get a single order by Title
// @access  Public
// router.get('/title/:title', getServiceByTitle);

// @route   GET /api/orders
// @desc    Get all orders
// @access  Public
router.get('/', getAllOrders);

module.exports = router;

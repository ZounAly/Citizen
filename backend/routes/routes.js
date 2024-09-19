const express = require('express');
const {
  createService,
  updateService,
  deleteService,
  getServiceById,
  getServices,
  getServiceByTitle
} = require('../controllers/serviceController');

const {
  registerUser, 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser, 
  loginUser
} = require('../controllers/userController');

const router = express.Router();

// @route   POST /api/services
// @desc    Create a new service
// @access  Public
router.post('/', createService);

// @route   PUT /api/services/:id
// @desc    Update an existing service
// @access  Public
router.put('/:id', updateService);

// @route   DELETE /api/services/:id
// @desc    Soft delete a service
// @access  Public
router.delete('/:id', deleteService);

// @route   GET /api/services/:id
// @desc    Get a single service by ID
// @access  Public
router.get('/:id', getServiceById);

// @route   GET /api/services/:title
// @desc    Get a single service by Title
// @access  Public
router.get('/title/:title', getServiceByTitle);

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get('/', getServices);

router.post('/login', loginUser);


module.exports = router;

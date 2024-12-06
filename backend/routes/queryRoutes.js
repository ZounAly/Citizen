const express = require('express');
const {
  createQuery, getAllQueries, getQueryById
} = require('../controllers/queryController');

const router = express.Router();

// @route   POST /api/querys
// @desc    Create a new query
// @access  Public
router.post('/', createQuery);

// @route   GET /api/querys/:id
// @desc    Get a single query by ID
// @access  Public
router.get('/:id', getQueryById);

// @route   GET /api/querys
// @desc    Get all query
// @access  Public
router.get('/', getAllQueries);

module.exports = router;

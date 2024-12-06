const asyncHandler = require('express-async-handler');
const Query = require('../models/query');

// Create a new query
const createQuery = asyncHandler(async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
        res.status(400);
        throw new Error('All fields are required.');
    }

    // Create and save the query
    const newQuery = new Query({ name, email, phone, message });
    const savedQuery = await newQuery.save();

    res.status(201).json({
        message: 'Query created successfully.',
        query: savedQuery
    });
});

// Get all queries
const getAllQueries = asyncHandler(async (req, res) => {
    const queries = await Query.find(); // Retrieve all queries
    res.status(200).json({
        message: 'Queries fetched successfully.',
        queries
    });
});

// Get a query by ID
const getQueryById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('Invalid query ID.');
    }

    const query = await Query.findById(id); // Retrieve query by ID

    if (!query) {
        res.status(404);
        throw new Error('Query not found.');
    }

    res.status(200).json({
        message: 'Query fetched successfully.',
        query
    });
});

module.exports = { createQuery, getAllQueries, getQueryById };
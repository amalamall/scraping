const express = require('express');
const router = express.Router();
const { getCategories } = require('../controller/categories');

// Create a new Products item
router.get('/', getCategories);
// Implement other routes (e.g., get all Products, update Products, delete Products) similarly

module.exports = router;

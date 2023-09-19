// src/routes/ProductsRoutes.js
const express = require('express');
const router = express.Router();
const { scrapDataFromJumia } = require("../controller/scrap")

// Create a new Products item
router.post('/', scrapDataFromJumia);

// Implement other routes (e.g., get all Products, update Products, delete Products) similarly

module.exports = router;
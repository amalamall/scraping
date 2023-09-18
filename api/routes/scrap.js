// src/routes/ProductsRoutes.js
const express = require('express');
const router = express.Router();
const { scrapDataFromJumia } = require("../controller/scrap")

router.post('/', scrapDataFromJumia);

module.exports = router;
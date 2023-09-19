
const express = require('express');
const router = express.Router();
const { getProducts, getProductsById } = require('../controller/products');

router.get('/', getProductsById);
router.get('/:subcategory', getProducts);

module.exports = router;

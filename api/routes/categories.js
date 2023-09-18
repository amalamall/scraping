const express = require('express');
const router = express.Router();
const { getCategories } = require('../controller/categories');

router.get('/', getCategories);

module.exports = router;

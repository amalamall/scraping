const express = require('express');
const router = express.Router();
const { getSubcategories } = require('../controller/subcategories');

router.get('/:category', getSubcategories);


module.exports = router;

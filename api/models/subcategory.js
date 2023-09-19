const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: String,
    href: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true }
});


module.exports = mongoose.model('subcategory', SubCategorySchema);
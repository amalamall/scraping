const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        default: "N/A"
      },
      brand: {
        type: String,
        default: "N/A"
      },
      specifications: {
        type: [{
            key : String,
            value : String
        }], 
      },
      delivery: {
        type: String,
        default: "N/A"
      },
      price: {
        type: String,
        default: "N/A"
      },
      availability: {
        type: String,
        default: "N/A"
      },
      subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'subcategory', required: true  }
});

module.exports = mongoose.model('product', ProductSchema);

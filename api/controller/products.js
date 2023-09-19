const Product = require("../models/product")
const Category = require("../models/category")


exports.getProductsById = async (req, res) => {
  try {
    return res.status(200).json({
      products: (await Product.findById(req.query.id))
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getProducts = async (req, res) => {
  try {
    return res.status(200).json({
      products: (await Product.find({ subcategory: req.params.subcategory}))
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


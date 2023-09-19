
const Category = require("../models/category")

exports.getCategories = async (req, res) => {
  try {
    return res.status(200).json({
      categories: (await Category.find()),
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


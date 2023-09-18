
const Subcategory = require("../models/subcategory")

exports.getSubcategories = async (req, res) => {
  try {

    return res.status(200).json({
      subcategories: (await Subcategory.find({ category: req.params.category}))
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


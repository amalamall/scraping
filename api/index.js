require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
require("./db")
const cors = require('cors');
const productRoutes = require('./routes/products.js');
const subcategoriesRoutes = require('./routes/subcategories.js');
const categoriesRoutes = require('./routes/categories.js');
const scrapRoutes = require('./routes/scrap');
const errorHandler = require('./middlewares/errorHandler.js'); // Import the error handler middleware
const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
  origin: 'http://localhost',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/subcategories', subcategoriesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/scrap', scrapRoutes);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
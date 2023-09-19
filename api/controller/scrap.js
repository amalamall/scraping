// src/controllers/todoController.js
const Product = require('../models/product');
const Category = require("../models/category");
const Subcategory = require("../models/subcategory")
const axios = require('axios');
const cheerio = require('cheerio');

const getDataFromUrl = async (url) => {
    const response = await axios.get(url);
    // Load the HTML content of the page using Cheerio.
    const $ = cheerio.load(response.data);
    return $
}

const getCategories = async () =>  {
    const $ = await getDataFromUrl('https://www.jumia.ma/') 
    const menuDiv = $('div[role="menu"].flyout');
    // Use .find() to select all anchor tags inside the menuDiv
    const anchorTags = menuDiv.find('a');
    // Iterate through the selected anchor tags and print their text and href attributes
    const found_categories = []
    anchorTags.each((index, element) => {
        if(index > 2) return
        const name = $(element).text();
        const href = $(element).attr('href');
        found_categories.push({ name, href })
    });
    const categories = await Category.insertMany(found_categories)
    for (const category of categories) {
        await getSubCategories(category.href, category._id)
    }
    return categories
}

const getSubCategories = async (category, category_id) =>  {
    const $ = await getDataFromUrl(`https://www.jumia.ma/${category}`)
    const anchorTags = $('a[data-eventcategory="Filters Apply"][data-eventaction="category"]');
    const found_subCategories = []
    anchorTags.each(async (index, element) => {
      if(index === 0 ) return // avoid first element because its the same as the category variable
      const name = $(element).text();
      const href = $(element).attr('href');
      found_subCategories.push({
        name,
        href,
        category: category_id
      })
    });
    const subCategories = await Subcategory.insertMany(found_subCategories)
    for (const subCategory of subCategories) {
        await getProducts(subCategory.href, 2, subCategory._id)
    }
    return subCategories
}

const getProducts = async (subCategory, numOfPages = 2, subCategory_id) => {
    const products = []
    for (let page = 1; page <= numOfPages; page++) {
        const $ = await getDataFromUrl(`https://www.jumia.ma/${subCategory}?page=${page}#catalog-listing`)
        const anchorTags = $('a[data-track-onview="eecProduct"]');
        anchorTags.each(async (index, element) => {
          const href = $(element).attr('href');
          const $$ = await getDataFromUrl(`https://www.jumia.ma${href}`)
          const marque = ($$('div.-pvxs:not([class*=" "]) > a._more:first')).text() || "Generic"
          const name = ($$('h1:first')).text()
          const image = ($$('a[data-pop-trig="lazy-img-zoom"]')).attr('href')
          const availability = ($$('p.-df')).text()
          const price = ($$('span.-b.-ltr.-tal.-fs24.-prxs')).text()
          const livraison = 
          ($$('div.-df.-fw-w.-c-bet.-fg1')).find('div:eq(1)')
          .children().map((index, childElement) => $(childElement).text()).get().join(' ')
        const specifications = []
        const liTags = $$('li.-pvxs');
        // Check if any matching <li> tags were found
        if (liTags.length > 0) {
            // Initialize variables to store the text from <span> and <li> tags
            let spanText;
            let liText;
            // Iterate through the selected <li> tags
            liTags.each((index, element) => {
            spanText = $(element).find('span:first').text();
            // Get the text of the <li> itself
            liText = $(element).text();
            // Remove the spanText from liText
            liText = liText.replace(spanText, '').replace(':', '')
            specifications.push({
                key: spanText,
                value: liText
            })
            });
        }
        const productInfo = {
            subcategory: subCategory_id,
            name,
            url: href,
            image,
            brand: marque,
            delivery: livraison,
            price,
            availability,
            specifications
        }
        products.push(productInfo)
        });
    }
    return await Product.insertMany(products)
}

exports.scrapDataFromJumia = async (req, res, next) => {
    try {
    await Product.deleteMany({})
    await Subcategory.deleteMany({})
    await Category.deleteMany({})
    const categories = await getCategories()
    return res.status(200).json({ categories });
    } catch (e) {
      next(e)
    }
}
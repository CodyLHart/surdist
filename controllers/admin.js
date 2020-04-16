const Product = require('../models/product');

module.exports = {
    createProduct,
    indexProducts
}


async function createProduct(req, res) {
    try {
        await Product.create(req.body);
        indexProducts(req, res);
    } catch (err) {
        res.json({err});
    }
}


async function indexProducts(req, res) {
    const product = await Product.find({});
    res.json(product);
}
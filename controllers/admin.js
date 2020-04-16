const Product = require('../models/product');

module.exports = {
    createProduct,
    indexProducts,
    viewProduct,
    updateProduct,
    deleteProduct
}


async function createProduct(req, res) {
    try {
        await Product.create(req.body);
        indexProducts(req, res);
    } catch (err) {
        res.json({err});
    }
}

async function updateProduct(req, res) {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedProduct);
}


async function indexProducts(req, res) {
    const products = await Product.find({});
    res.json(products);
}

async function viewProduct(req, res) {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

async function deleteProduct(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json(product)
}
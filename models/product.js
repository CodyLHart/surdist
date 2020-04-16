const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    productType: {
        type: String,
        // required: true,
    },
    displayName: {
        type: String,
        // required: true
    },
    series: {
        type: String,
    },
    design: {
        type: String,
    },
    cut: {
        type: String,
        enum: ['', 'Unisex', 'Womens', 'Crop Top', 'Raglan'],
    },
    material: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        // required: true,
    },
    stockXS: {
        type: Number,
        // required: true,
    },
    stockS: {
        type: Number,
        // required: true,
    },
    stockM: {
        type: Number,
        // required: true,
    },
    stockL: {
        type: Number,
        // required: true,
    },
    stockXL: {
        type: Number,
        // required: true,
    },
    sku: {
        type: String,
        // required: true
    },
    photo: {
        type: String,
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Product', productSchema);
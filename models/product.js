const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    productType: {
        type: String,
    },
    displayName: {
        type: String,
    },
    series: {
        type: String,
    },
    design: {
        type: String,
    },
    cut: {
        type: String,
    },
    material: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    stockXS: {
        type: Number,
    },
    stockS: {
        type: Number,
    },
    stockM: {
        type: Number,
    },
    stockL: {
        type: Number,
    },
    stockXL: {
        type: Number,
    },
    sku: {
        type: String,
    },
    photo: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Product', productSchema);
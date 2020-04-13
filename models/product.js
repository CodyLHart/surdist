const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema ({
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const productSchema = new Schema ({
    productType: {
        type: Schema.Types.ObjectId,
        ref: "ProductType",
        required: true,
    },
    displayName: {
        type: String,
        required: true
    },
    cut: {
        type: String,
        enum: ['Unisex', 'Womens', 'Crop Top', 'Raglan'],
    },
    design: {
        type: Schema.Types.ObjectId,
        ref: "ShirtDesign"
    },
    material: {
        type: String,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    collection: {
        type: Schema.Types.ObjectId,
        ref: "Collection"
    },
    stock: {
        type: Number,
        required: true
    },
    photos: [photoSchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTypeSchema = new Schema ({
    productType: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('ProductType', productTypeSchema);
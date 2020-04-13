const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shirtDesignSchema = new Schema ({
    design: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ShirtDesign', shirtDesignSchema);
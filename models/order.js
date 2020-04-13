const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderNo: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        required: true,
    },
    contents: [{ type: Schema.Types.ObjectId, ref: "Product" }],
}, {
    timestamps: true
});
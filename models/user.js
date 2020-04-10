const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    password: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
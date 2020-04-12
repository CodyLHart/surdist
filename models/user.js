const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

// DONT ADD MUCH IF ANYTHING MORE TO THE USER MODEL BECAUSE
// IT IS BEING ADDED TO THE TOKEN DATA PAYLOAD.
// REFERENCE USER ON OTHER RELATED MODELS INSTEAD OF ON THE USER MODELS

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
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
}

module.exports = mongoose.model('User', userSchema);
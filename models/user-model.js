const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart: {
       type: Array,
         default: []
    },
    orders: {
        type: Array,
        def,ault: []
    },
    isAdmin: Boolean,
    contact: Number,
    picture: String
    });

module.exports = mongoose.model('User', userSchema);
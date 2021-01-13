const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email id already present'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: true
    }
});


//  create new collections

const User = new mongoose.model('User', userSchema);

module.exports = User;
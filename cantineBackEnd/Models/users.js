const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,  // Ensure that the name is unique
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Users', userSchema);

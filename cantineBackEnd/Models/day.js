const mongoose = require('mongoose');  

const daySchema = new mongoose.Schema({
    idDay: {
        type: Number,
        required: [true, 'idDay is required'], // Adding a custom error message
        unique: true // Ensure idDay is unique, if necessary
    },
    nomDay: {
        type: String,
        required: [true, 'nomDay is required'] // Custom error message for nomDay
    },
    ref: {
        type: Number,
        required: [true, 'ref is required'] // Custom error message for ref
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Day', daySchema);

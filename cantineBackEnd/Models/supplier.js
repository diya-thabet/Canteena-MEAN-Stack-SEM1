const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    libelle: {
        type: String,
        required: [true, 'Libelle is required'], // Custom error message
        minlength: [3, 'Libelle must be at least 3 characters long'], // Validation for minimum length
        maxlength: [100, 'Libelle should not exceed 100 characters'] // Validation for maximum length
    },
    description: {
        type: String,
        required: [true, 'Description is required'], // Custom error message
        minlength: [5, 'Description must be at least 5 characters long'], // Validation for minimum length
        maxlength: [500, 'Description should not exceed 500 characters'] // Validation for maximum length
    },
    dateSupplier: {
        type: Date,
        required: [true, 'Date of supplier is required'], // Custom error message
        validate: {
            validator: function(v) {
                return v instanceof Date && !isNaN(v); // Ensure valid date
            },
            message: 'Date should be a valid date'
        }
    },
    views: {
        type: Number,
        required: [true, 'Views are required'], // Custom error message
        min: [0, 'Views cannot be negative'] // Validation for minimum views
    },
    type: {
        type: String,
        required: [true, 'Type is required'], // Custom error message
        enum: ['food', 'service', 'product'], // Example of validation for specific types
        minlength: [1, 'Type should be at least 3 characters long'] // Optional validation for min length
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Supplier', supplierSchema);

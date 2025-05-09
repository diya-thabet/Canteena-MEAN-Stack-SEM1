const mongoose = require('mongoose'); 

const employeeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // To ensure email is unique
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'] // Email format validation
    },
    dateIng: {
        type: Date,
        required: [true, 'Joining date is required'],
    },
    statue: {
        type: String,
        required: [true, 'Status is required'],
        enum: ['Active', 'Inactive', 'Suspended'], // Example enum for valid status values
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Employee', employeeSchema);

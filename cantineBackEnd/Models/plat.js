const mongoose = require('mongoose');

// Plat Schema
const platSchema = new mongoose.Schema({
    idDay: {
        type: Number, // Refers to the `idDay` field as a simple number
        required: true,
    },
    libePlat: {
        type: String,
        required: true,
    }
});

// Export the model
module.exports = mongoose.model('Plat', platSchema);

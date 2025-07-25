const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    departament: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotdog = new Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model('Hotdog', Hotdog);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sale = new Schema({
    date: {
        type: String,
        required: true
    },
    order: {
        type: Array,
        required: true
    },
    // attendant: {
    //     type: Object,
    //     required: true
    // }
    totalPrice: Number
});

module.exports = mongoose.model('Sale', Sale);
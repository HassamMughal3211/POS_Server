const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    
    itemName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    bestBefore: {
        type: Date,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    itemImage: {
        type: String,
        required: true,
    },

}, {
    timeStamp: true
})

const Item = new mongoose.model("Item" , itemSchema);

module.exports = Item;
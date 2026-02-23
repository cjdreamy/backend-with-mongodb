const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: [true,"Name is required"]
    },
    quantity:{
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true,"Price is required"]
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
    }
);
const productModel = mongoose.model("Product",productSchema);
module.exports = productModel;


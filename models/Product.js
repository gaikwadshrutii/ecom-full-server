const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // email: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    mrp: { type: Number, required: true },
    active: { type: Boolean, default: false },
    image: { type: String, required: true },
}, { timestamps: true })
module.exports = mongoose.model("product", productSchema)
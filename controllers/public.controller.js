// publicGetAllProduct
// publicGetAllProductDetails
const asyncHandler = require("express-async-handler")
const Product = require("../models/Product")

exports.PublicGetProducts = asyncHandler(async (req, res) => {
    const result = await Product.find({ active: true })
    res.json({ message: "Product Fetch Success", result })
})

exports.PublicGetAllProductDetails = asyncHandler(async (req, res) => {
    const result = await Product.findById(req.params.id)
    res.json({ message: "Product Details Success", result })
})
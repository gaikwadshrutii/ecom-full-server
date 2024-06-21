const asyncHandler = require("express-async-handler")
const Product = require("../models/Product")
const { upload } = require("../utils/upload")
// const Product = require("../models/Product")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KAY,
    api_secret: process.env.CLOUDINARY_API_SECRET ,// Click 'View Credentials' below to copy your API secret
})

exports.getAllProducts = asyncHandler(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "Product Fetch success", result })
})
exports.addProducts = asyncHandler(async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(404).json({ message: "upload error" })
        }
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        // console.log(req.file.path)
        const result = await Product.create({ ...req.body, image: secure_url })
        res.json({ message: "Product Add success", result })
    })
})
exports.updateProducts = asyncHandler(async (req, res) => {
    res.json({ message: "Product Update success" })``
})
exports.deleteProducts = asyncHandler(async (req, res) => {

    const result = await Product.findById(req.params.id)

    const str = result.image.split("/")
    const img = str[str.length - 1].split(".")[0]
    await cloudinary.uploader.destroy(img)
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product Delete success", })
})
exports.deactivateProducts = asyncHandler(async (req, res) => {
    res.json({ message: "Product Deactivate success" })
})
exports.activateProducts = asyncHandler(async (req, res) => {
    res.json({ message: "Product Activate success" })
})
exports.getProductDetails = asyncHandler(async (req, res) => {
    res.json({ message: "Product Details success" })
})
// order
exports.getAllOrders = asyncHandler(async (req, res) => {
    res.json({ message: "Order Fetch success" })
})
exports.getOrderDetail = asyncHandler(async (req, res) => {
    res.json({ message: "Order Detail success" })
})
exports.cancleOrder = asyncHandler(async (req, res) => {
    res.json({ message: "Order Cancle success" })
})
exports.updateOrderStatus = asyncHandler(async (req, res) => {
    res.json({ message: "Order Status Update success" })
})
//user
exports.getAllUsers = asyncHandler(async (req, res) => {
    res.json({ message: "Users Fetch success" })
})
exports.getUserDetail = asyncHandler(async (req, res) => {
    res.json({ message: "Users Detail Fetch success" })
})
exports.blockUser = asyncHandler(async (req, res) => {
    res.json({ message: " Users Block success" })
})
exports.unblockUser = asyncHandler(async (req, res) => {
    res.json({ message: " Users Block success" })
})
exports.getUserOrders = asyncHandler(async (req, res) => {
    res.json({ message: " Users Block success" })
})
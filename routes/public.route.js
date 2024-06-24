const router = require("express").Router()
const publicController = require("./../controllers/public.controller")
router
    .get("/products", publicController.PublicGetProducts)
    .get("/product/:id", publicController.PublicGetAllProductDetails)
module.exports = router

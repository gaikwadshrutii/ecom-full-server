const router = require("express").Router()
const adminController = require("./../controllers/admin.controller")
router
    .get("/products", adminController.getAllProducts)
    .post("/add-product", adminController.addProducts)
    .put("/update-product/:id", adminController.updateProducts)
    .delete("/delete-product/:id", adminController.deleteProducts)
    .put("/deactivate-product/:id", adminController.deactivateProducts)
    .put("/activate-product/:id", adminController.activateProducts)
    .get("/product-details/:id", adminController.getProductDetails)

    .get("/orders", adminController.getAllOrders)
    .get("/order-details", adminController.getOrderDetail)
    .put("/cancel-order/:id", adminController.cancleOrder)
    .put("/update-order-status/:id", adminController.updateOrderStatus)

    .get("/users", adminController.getAllUsers)
    .get("/user-detail/:id", adminController.getUserDetail)
    .put("/block-user/:id", adminController.blockUser)
    .put("/unblock-user/:id", adminController.unblockUser)
    .get("/user-orders/:id", adminController.getUserOrders)
module.exports = router
const router = require("express").Router()
const authController = require("./../controllers/auth.controller")
router
    .post("/register-admin", authController.registerAdmin)
    .post("/login-admin", authController.loginAdmin)
    .post("/login-user", authController.loginUser)
    .post("/", authController.registerUser)
    .post("/logout-admin", authController.logoutAdmin)

module.exports = router
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use("/api/admin", require("./routes/admin.routes"))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resourse Not Founed 404" })
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "server error ", err: err.message })
})



mongoose.connection.once("open", (req, res) => {
    console.log("MONGOOSE CONNECT SUCCESS")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})
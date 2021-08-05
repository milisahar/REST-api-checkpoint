const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    tel: { type: Number, required: true },
    email: { type: String, required: true },
    adress: { type: String, required: true }
})

module.exports = user = mongoose.model("users", userSchema);
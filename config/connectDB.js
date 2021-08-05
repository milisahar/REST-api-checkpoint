const mongoose = require("mongoose");
const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connection to data base success")
    } catch (error) {
        console.log("connection failed" + error)
    }
}

module.exports = connectDB;
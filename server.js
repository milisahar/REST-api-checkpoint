const express = require("express")
const connectDB = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });
const user = require("./routes/User");
const app = express()
const port = process.env.PORT
app.use(express.json());
connectDB();

app.use("/user", user);

app.listen(port, (err) => {
    (err) ? console.log("the server is not connected" + err) : console.log("the port is running on port " + port)
})

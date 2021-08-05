const express = require("express")
const { addUser } = require("../controllers/userController")
const Router = express.Router()

Router.post("/register", addUser)

module.exports = Router;
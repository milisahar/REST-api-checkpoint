const user = require("../models/user")

exports.addUser = async (req, res) => {
    const newUser = await new user({ ...req.body })
    console.log(req.body)
    try {

        newUser.save();
        res.status(202).json({ msg: "register success" })


    } catch (error) {
        console.error("register failed")
        res.status(402).json({ msg: "register failed" })

    }

}
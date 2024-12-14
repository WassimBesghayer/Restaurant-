const express = require("express");
const userRouter = express.Router()


// add user
userRouter.post("/add", async(req, res) => {
    try {
        let newuser (req.body);
        let result = await newuser.save();
        res.send({user : result, msg : "new user is added"})
    } catch (error) {
        console.log(error);
    }
})

// get all users


// get user by ID


// update user



// delete user


module.exports = userRouter
const expres = require("express");
const cors = require("cors")
const { mongoose } = require("mongoose");
const app = expres();
const PORT = 5000
require("./Connection")
const Users = require("./UserSchema")

app.use(expres.json())
app.use(cors())


// get all users data
app.get("/fetclAllUsers", async (req, res) => {
    const data = await Users.find({})
    res.send(data)
})

// fetch single user data
app.get("/fetchUser/:id", async (req, res) => {
    const data = await Users.findOne({ _id: new mongoose.Types.ObjectId(req.params.id) })
    res.send(data)
})

// delete user by id
app.delete("/delete/:id", async (req, res) => {
    const data = await Users.deleteOne({ _id: req.params.id })
    res.send(data)
})

//save new users
app.post("/save", async (req, res) => {
    const info = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    }
    const data = await Users(info)
    const result = await data.save();
    res.send(result)
})


//update single record
app.post("/update/:id", async (req, res) => {
    const id = req.params.id
    const data = await Users.updateOne({ _id: id }, { $set: req.body })
    res.send(data)
})


// start server
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port : ${PORT}`)
    }
})
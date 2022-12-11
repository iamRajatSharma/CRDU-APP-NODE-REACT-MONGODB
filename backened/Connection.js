const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1/crud"
mongoose.connect(url, (err)=>{
    if(err){
        console.log("DB Error")
    }
})
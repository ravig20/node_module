const mongoose  = require("mongoose");


const usersSchema = new mongoose.Schema({
    name:String,
    order:String,
    contect:Number,
    email:String

})

module.exports=mongoose.model("Users", usersSchema);
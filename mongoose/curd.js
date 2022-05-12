//node js se data dala data  base me 


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/e-comm');
const usersSchema = new mongoose.Schema({
    name: String,
    dob: Number,
    address : String

})

const funSaveUserData = async () =>{
    const users = mongoose.model("users",usersSchema);
    let Iusers = new users({
        name:"ravi",
        dob:22072002,
        address:"bada bazar sagar"
    })
    let UIuser = await Iusers.save();
    console.log(UIuser)

}
//funSaveUser();

const funDeleteUserData = async () =>{
    const users = mongoose.model("users", usersSchema );
    let Dusers = await users.deleteMany({
        name:"computer"
    })
    console.log(Dusers);
}
//funDeleteUserData();

const funUpdateUserData = async ()=>{
    const users = mongoose.model("users", usersSchema);
    let Uuser =  await users.updateOne({name:"ravi"},
        {$set:{
            dob: 22072001,
            address: "shahgarh sagar"


        }}
        );
        console.log(Uuser)

}
//funUpdateUserData();

const funFindUserData =async ()=>{
    const users = mongoose.model("users", usersSchema);
    let Fusers = await users.find({});
    console.log(Fusers);
}
//funFindUserData();

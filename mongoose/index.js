//API get data from users and c d r u in data bose;
const express = require("express");
require("./config");
const users = require("./users");


const app = express();
app.use(express.json());
app.post("/users", async (res,reqe)=>{
    let IuserData = new users(res.body);
    let shoeResult = await IuserData.save();
    console.log(shoeResult);
    reqe.send("hii im working");
})

app.get("/users", async (res,reqe)=>{
    let IuserData = await users.find(res.body);
    // let shoeResult = await IuserData.find(); not do this 
    console.log(IuserData);
    reqe.send("hii im working");
})

app.put("/users/:name", async (res,reqe)=>{
   
    let shoeResult = await users.updateMany(res.params,
        {
            $set: res.body
        });
        
    console.log(res.params)
   console.log(res.body);
   console.log(shoeResult);
    reqe.send("updated");
})
app.delete("/users/:id", async (res,reqe)=>{

   // let bodyresuly = await users.deleteMany(res.body); // when use send by body
    let paramsresult = await users.deleteOne(res.params);
    console.log(paramsresult);
    reqe.send("deleted");
})


app.listen(4500);
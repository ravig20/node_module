const express = require("express");
require('./config');
const Users = require("./usersCollection");

const app = express();
app.use(express.json());

app.get("/:name", async (req, resp) => {
    //console.log(req.params.name);

    let searching = await Users.find(
        {
            "$or":[
                {"name":{$regex:req.params.name}}, // single searching 
                {"titil":{$regex:req.params.name}} // more then one  searching called mulity searching

            ]

        })
    console.log(searching);

    resp.send(`<h1>"hello"<h1/>`);
})
app.listen(5500);
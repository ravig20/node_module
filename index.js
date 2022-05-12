
const express = require('express');
const dbConnectUsers = require('./mongoDB/database');
const mongodb = require('mongodb');
const path = require('path');
const requied = require('./middlewere');
const res = require('express/lib/response');

const myhtmlpath = path.join(__dirname, 'htmlfile');
const myejspath = path.join(__dirname, 'views');
const app = express();

//  app.use(express.json()); its use for gerting a data from a body 
app.use(express.json()); // use in post  request



//      :-   template engine   -:

// ==> in template engine body  always same
// ==> also always create "views folder " them file name with filename.ejs
app.set('view engine', 'ejs'); // set engine ,do not change

app.get('/api', async (req, resp) => {
    let result = await dbConnectUsers();
    result = await result.find({}).toArray();
    resp.send(result);

})

app.post('/api', async (req, resp) => {
    let data = await dbConnectUsers();
    data = await data.insertOne(req.body); // insert data in database
    resp.send(data)
    if (data.acknowledged) {
        console.log("data inserted", req.body.name);

    }
})

app.put('/api/:name', async (req, resp) => {
    let update = await dbConnectUsers();
    update = await update.updateOne({ name: req.params.name }, { $set: req.body });
    resp.send({ name: "done" })
    console.log(req.body);

})

app.delete('/api/:name', async (req, resp) => {
    let Delete = await dbConnectUsers();
   // Delete = await Delete.delete({_id: id}); this will not work in id case because _id gives object 
   // so first we convert _id num type into object type
  // Delete = await Delete.deleteOne({_id : new mongodb.ObjectId(req.params.id)}); // this will work
  Delete = await Delete.deleteMany({name:req.params.name}); // this will work

    console.log("delete")
    resp.send(`${req.params.id}, delete`);
})


app.get('/profile', requied, (req, resp) => {  // ==> @this is rought level middlewere
    const user = {
        name: "ravi gupta",
        age: 29,
        email: "ravi@hmail.com",
        city: "indore"

    }
    resp.render(`${myejspath}/profile.ejs`, { user }
    )
})


//           :-    remove file Extension in rought    -:

//app.use(express.static(myhtmlpath)); this will import all these file with file extension 

//==> app.use(express.static(myhtmlpath));  ==> lockalhost:4000/file.html  ==> accses files with Extension

// using this thay will only get one file 

//==> app.get("/roughtName",(req,resp)=>{ resp.sendFile(`${myhtmlpath}/home.html`); })==>  removeExtension() ==> lockalhost:4000/file  ==> accses files without Extension



app.get("/", (req, resp) => {
    //only use for short messages
    resp.send(`<h1> "hello home page" <\h1> `); // that is not a good represention 

})
// so what is a good represention using file we    .sendfile();
app.get("/home", requied, (req, resp) => {
    resp.sendFile(`${myhtmlpath}/home.html`);

})

app.get("/help", (req, resp) => {
    resp.send(`<h1> "hello home help" <\h1>`);

})
app.get("/contect", (req, resp) => {
    resp.send(`<h1> "hello home contect" <\h1>`);

})


// when user input wrong rought those not exist 
// then we make universal page 
// rought => "*"
app.get("*", (req, resp) => {
    resp.sendFile(`${myhtmlpath}/pagenotfound.html`); // sending html file
})


app.listen(4000)

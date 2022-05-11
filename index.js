
const express = require('express');
const path = require('path');
const myhtmlpath = path.join(__dirname,'htmlfile'); 
const app = express();

 //app.use(express.static(myhtmlpath)); this will import all these file with file extension 

//==> app.use(express.static(myhtmlpath));  ==> lockalhost:4000/file.html  ==> accses files with Extension

// using this thay will only get one file 

//==> app.get("/roughtName",(req,resp)=>{ resp.sendFile(`${myhtmlpath}/home.html`); })==>  removeExtension() ==> lockalhost:4000/file  ==> accses files without Extension



app.get("/",(req,resp)=>{
    //only use for short messages
    resp.send(`<h1> "hello home page" <\h1> `); // that is not a good represention 
    
})
// so what is a good represention using file we    .sendfile();
app.get("/home",(req,resp)=>{
    resp.sendFile(`${myhtmlpath}/home.html`);
    
})

app.get("/help",(req,resp)=>{
    resp.send(`<h1> "hello home help" <\h1>`);
    
})
app.get("/contect",(req,resp)=>{
    resp.send(`<h1> "hello home contect" <\h1>`);
    
})
app.listen(4000)

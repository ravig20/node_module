// this simpalDB file shows how to connect data base on node js

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect(); // connect to data base
    let db = result.db(database); // connenct to e-comm data base  
    let Userdata = db.collection("Users"); // connect to Users collection
    let userInfo = await Userdata.find({}).toArray(); // read data from data base
    console.log(userInfo); // 
}
getData();





























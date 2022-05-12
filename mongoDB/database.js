// this is a confrigation file
// connection
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function dbConnectUsers() {
    let result = await client.connect(); // connect to data base
    let db = result.db(database); // connenct to e-comm data base
    return db.collection("Users");  // connect to Users collection

} // but its will give promise

//                  :- ways to handel theses promise -: => promise.js file tells you what is promise

// ==> @first way

// dbConnectUsers().then(async (resp) => {

//     // console.log(await resp.find({name:'happy'}).toArray());   both are same

//     await resp.find({ name: 'happy' }).toArray().then((data) => {
//         console.log(data);

//     })
// })

// ==> @2 way

// const  main = async ()=>{
//      let data = await dbConnectUsers();
//     let result = await data.find().toArray(); 
//      console.log(result);
//  }
//main();

module.exports = dbConnectUsers; // use to impor




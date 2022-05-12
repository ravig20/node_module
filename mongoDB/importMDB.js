// import mongodb file mongoModule.js
// read data from data base
// this file will be show you how to use imports files

const db = require("./mongoModule.js");

const main = async () => {
    let usersdata = await dbConnectUsers();
    usersdata = await usersdata.find({}).toArray();
    console.log(usersdata);
}
main();
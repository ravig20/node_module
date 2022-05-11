// this code show how to get data from consol and using fonsol data we make files
// using >= process 
const fs = require("fs");
const input = process.argv;
console.log(input[2],input[3]); // check work or not
fs.writeFileSync(input[2], input[3]);

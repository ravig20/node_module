const dbConnectUsers = require('./mongoModule.js');

const inserData = async ()=>{

     let Users = await dbConnectUsers();
     Users = await Users.insertMany([
         {name:'ravinew', age:92, gender:'mail'},
         {name:'shreenew', age:12, gender:'mail'},
         {name:'happy', age:32, gender:'mail'},
         {name:'rohani', age:22, gender:'femail'}]);


console.log(Users);
};
inserData();

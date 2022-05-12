const dbConnectUsers = require("./mongoModule");
const main = async () => {
    let data = await dbConnectUsers();
    let result = await data.deleteOne({
        name:"happy"}); 
    
    if(result.acknowledged){
        console.warn('done!!')
        if(result.deletedCount==0){
            console.log("this is not in data base")
        }
        
    }
}
main();
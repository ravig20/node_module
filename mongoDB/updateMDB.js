const dbConnectUsers = require("./mongoModule");

const updatedata = async () => {
    let data = await dbConnectUsers();
    let result = await data.updateOne(
        { name: "radhe" },
        { $set: { name: "ramram" } });
    // check data is update or not
    if (result.acknowledged) {
        console.log(result)
        console.log("data updated")
    }
};
updatedata();
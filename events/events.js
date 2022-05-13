const express = require("express");

const EventON = require("events")

const app = express();
const events = new EventON(); // class object
events.on("counter", () => {
    //function
    //.........
    console.log("event fire");
})

app.get("/users", (res, reqe)=> {


    reqe.send("hii im working");
    events.emit("counter");

})

app.listen(6000);
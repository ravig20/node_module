//        :-   Middlewere  -:
// use to validate input simple middlewere 
module.exports = requied = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("plese provied age")
    }
    else {
        next();
    }
}

// @application level middlewere
// app.use(requied);   "application rought this will check all rought condision"

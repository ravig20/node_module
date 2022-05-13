const express = require('express');
const multer = require('multer'); // use as a middlewere

const app = express();

// uplode use to uplode any file
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            cb(null, 'uploads')
        },
        filename: function (req, file, callback) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg") // .jpg use as a file extension
        }
    })
}).single('file_name');

app.post("/upload", upload, (req, resp) => {
    resp.send("file upload")
});

app.listen(5000)
const http = require('http'); // import http
const data = require('./userData');


http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
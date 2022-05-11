const http = require('http');

http.createServer((req,resp)=>{
    resp.write("hey, programmer");
    resp.end();

}).listen(4500);
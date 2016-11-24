var http = require("http");
var PORT = process.argv[2];
var myServer = http.createServer ( function (request, response){
           response.writeHead(200);
           response.write("hello");
           response.end();
        });

myServer.listen(PORT);
console.log("Success, i'm listening from port: " + PORT)
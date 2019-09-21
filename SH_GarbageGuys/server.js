// Load the http module to create an http server.
var http = require('http');

// Configure the HTTP server to print Hello World! to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!\n");
});

// Listen on port 8080
server.listen(8080);

console.log('Server available at http://localhost:8080/');

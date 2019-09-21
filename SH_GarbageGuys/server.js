// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure the HTTP server to print Hello World! to all requests.
var server = http.createServer(function (request, response) {
    if (req.url === "/create") {
        fs.readFile("AppPages/MyPage.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
});

// Listen on port 8080
server.listen(8080);

console.log('Server available at http://localhost:8080/');

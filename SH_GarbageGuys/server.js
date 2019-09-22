var express = require('express');
//var mysql = require('mysql');   
var app = express()

app.use(express.static('www'));

/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lopez4464',
    database: 
})*/

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)
})
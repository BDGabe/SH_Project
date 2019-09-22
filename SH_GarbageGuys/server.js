var express = require('express');
//var mysql = require('mysql');   
var app = express()

app.use(express.static('www'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lopez4464',
    database: 'SHGG:test:1' 
})

connection.connect(function (error) {
    if (!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected')
    }
})

app.get

var server = app.listen(8000, function () {
    connection.query("SELECT * FROM SHGG:test:1", function (error, rows, fields) { });

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)
})
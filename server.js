/*
hello world
var http = require('http');
http.createServer(function (request, response) {
  console.log("statusCode: ", response.statusCode); // <======= Here's the status code
  console.log("headers: ", response.headers);
    response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
*/

var express = require('express');
    wine = require('./routes/wines');

//to get put (update) and post (insert) working
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');

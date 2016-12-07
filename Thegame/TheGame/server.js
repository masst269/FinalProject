// var http = require('http');
// var path = require('path');
// var fs = require('fs');
//
// //var staticDir = path.join(__dirname, 'public');
// var indexFilename = 'homepage.html';
// // var notFoundFilename = '404.html';
// var port = process.env.PORT || 3000;
//
//
// var contents = fs.readFileSync('homepage.html', 'utf8');
// var style = fs.readFileSync('style.css', 'utf8');
// // var four = fs.readFileSync(staticDir + '/404.html', 'utf8');
// // var index = fs.readFileSync(staticDir + '/index.js', 'utf8');
// const server = http.createServer(handleRequest);
//
// function handleRequest(req, res){
// if (req.url == "homepage.html" || req.url == "/") {
//     res.statusCode = 200;
//     res.write(contents);
//     res.end();
// }
// else if (req.url == "style.css") {
//     res.write(style);
//     res.statusCode = 200;
//     res.end();
// }
//
// // else if (req.url == "/index.js") {
// //     res.write(index);
// //     res.statusCode = 200;
// //     res.end();
// // }
// //
// // else {
// //     res.write(four);
// //     res.statusCode = 404;
// //     res.end();
// // }
//
// }
// server.listen(port);
// console.log(" == Listening on port", port);

var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');


var app = express();
app.set('port', 3000);

//app.use(express.static());

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function (){
  var port = server.address().port;
  console.log('== Server Running');
});









//

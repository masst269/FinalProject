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
//
//

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

var count = 0;
var running = 0;
//Start button on Index Page suppose to begin it.
function start(){
if(running == 0){
    running = 1;
    increment();
document.getElementById("start").innerHTML = "Pause";
document.getElementById("startPause").style.backgroundColor = "red";
document.getElementById("startPause").style.borderColor = "red";
}
}
// the you win to leaderboadrd should do this
function pause() {
if(running == 1){
    running = 0;
  document.getElementById("").innerHTML = "0:00:00:00";
document.getElementById("start").innerHTML = "Resume";
document.getElementById("startPause").style.backgroundColor = "green";
document.getElementById("startPause").style.borderColor = "green";
};
}
//the return home should do this or when you die
function reset(){
running = 0;
count = 0;
}

function increment(){
if(running == 1){
    setTimeout(function(){
        count++;
        var mins = Math.floor(time/10/60);
        var secs = Math.floor(time/10 % 60);
        var hours = Math.floor(time/10/60/60);
        var tenths = time % 10;
        if(mins < 10){
            mins = "0" + mins;
        }
        if(secs < 10){
            secs = "0" + secs;
        }
        document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
        increment();
    },100)
}
}

//Global variable to hold the JSON object
var g_objJSON;

/** setJSON - Create JSON object
* Returns - Nothing
**/
function setJSON() {

  var v_aJSON = [];
  var v_hObject = {};
  var v_hTempHash = {};

  var v_sKey = document.getElementById("name").value;
  var v_sValue = count;

  try {
    v_hObject[v_sKey] = v_sValue;

    document.getElementById("name").value = "";
    document.getElementById("count").value = "";

    if (g_objJSON == undefined) {
      v_aJSON.push(v_hObject);
    } else {
      v_hTempHash = mergeHashOb(g_objJSON[0], v_hObject);
      v_aJSON.push(v_hTempHash);
    }
    g_objJSON = v_aJSON;
    alert("JSON created!");
  } catch (x) {
    alert(x.message);
  }
}

function getJSON() {
  for (var item in g_objJSON[0]) {
    var list = document.getElementById('box');
    var firstname = ["Name: " + item + "count: " +  g_objJSON[0][item]];
    var entry = document.createElement('li');
    entry.appendChild(firstname);
    list.appendChild(entry);

  }
}

function mergeHashOb(prm_hObj, prm_hObj2) {
  var v_hObj = {};
  for (var item in prm_hObj) {
    v_hObj[item] = prm_hObj[item];
  }
  for (var item in prm_hObj2) {
    v_hObj[item] = prm_hObj2[item];
  }
  return v_hObj;
}

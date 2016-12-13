// const http = require('http');
// const express = require('express');
// var app = express();
// var port = 8000;
// var path = require('path')
// var url = 'localhost'
// //const server = app.listen(port);
// var io = require("socket.io");


// //app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(__dirname + '/'));

// const server = http.createServer(app);
// server.listen(port, () => {
//     console.log("Server running and listening at http://localhost:${port}/");
// });


//    module.exports = app;

// var bodyParser = require('body-parser');
// var express = require("express");
// var app = express();
// var port = 8000;
// var url='localhost'
// var server = app.listen(port);
// var io = require("socket.io").listen(server);
// var serialport = require("serialport");
// var SerialPort = serialport.SerialPort;
// var port = new SerialPort("/dev/ttyAMA0", {
//   baudrate: 9600,
//   parser: serialport.parsers.readline("\n")
// }, false);

// io.sockets.on('connection', function (socket) {
// 	port.open(function(error) {

// 		  if (error) {
// 		    console.log('failed to open: ' + error);
// 		  } else {
// 		    // port.write("A");
// 		    console.log('Serial open');
// 		    port.on('data', function(data) {
// 		    //console.log('data length: ' + data.length);
// 		    console.log(data);
// 		    result = data.split(',')
// 		    result[3]


		  
// 		    // console.log(data);
// 		    // console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.g);
// 		    socket.emit('toScreen', { r: result[1], g: result[2], b: result[3] });     
		  



		    
// 		    // port.write("A");
// 		    });


// 		}
  
// 	});
// });

var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var port = 8000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);
var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 115200,
  parser: SerialPort.parsers.readline("\n")
});

app.use(express.static(__dirname + '/'));
console.log('Simple static server listening at '+url+':'+port);

// socket.io stuff
io.sockets.on('connection', function (socket) {
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('news', { hello: data });     

  });
});

var result = "";
var brightness = 0;
var r = 0;
var g = 0;
var b = 0;

io.sockets.on('connection',function(socket){
  
        port.on('data', function(data){

            console.log(data);
            result = data.split('\n');


            // console.log("Success")
            
              socket.emit('connection', function(data){
                console.log(result);
              });

              socket.emit('led', {value: result[0]});

              io.sockets.emit('led', {value: result[0]});

        });


});




io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});

io.sockets.on('connection', function (socket) {
        socket.emit('message', 'You are connected!');
        port.on('data', function(data){
          // socket.emit
        })
});


// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})
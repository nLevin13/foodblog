var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express')

app.get(['/', '/index'], function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get(['/single.html', '/blog1'], function(req, res){
  res.sendFile(__dirname + '/single.html');
});

app.get('/blog2', function(req, res){
  res.sendFile(__dirname + '/blog2.html');
});

app.get('/blog3', function(req, res){
  res.sendFile(__dirname + '/blog3.html');
});

app.get('/blog4', function(req, res){
  res.sendFile(__dirname + '/blog4.html');
});

app.get('/page2', function(req, res){
  res.sendFile(__dirname + '/page2.html');
});

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));

app.use("/single.html", express.static(__dirname + '/single.html'));

io.on('connection', function(socket){
  console.log('a user connecc');
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});

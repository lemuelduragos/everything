var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users =  {};
var names = new Array();
 
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){

	socket.on('userconnected', function(name){
    	io.emit('userconnected',name+' has connected');
 	});

 	socket.on('message', function(msg, name){
    	socket.broadcast.emit('message', msg, name)
    });
  
});


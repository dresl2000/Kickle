
var express = require('express');

var server = express();
server.use(express.static(__dirname + '/KickleFrontend/public'));
//server.use(express.static(__dirname + '/KickleFrontend/production'));


server.use('/node_modules',express.static('C:\\Users/dresl/Desktop/kickle/KickleFrontend/node_modules'));

var port = 2525;
server.listen(port, function(){
	console.log(__dirname);
	console.log('Ready to serve, master. Listening on port ' + port);
});	



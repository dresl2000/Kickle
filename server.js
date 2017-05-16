
var express = require('express');

var server = express();
server.use(express.static(__dirname + '/KickleFrontend/public'));




var port = 2525;
server.listen(port, function(){
	console.log(__dirname);
	console.log('Ready to serve, master. Listening on port ' + port);
});	



var http =  require('http');
var server = http.createServer(function(request, response){
	response.writeHead(200,  {'Content-Type':'text/html'});
	response.write("safd");
	response.end('<b>This is for testing nodemon<b/>');
});
console.log('Listening on Port 8010');

server.listen(8090);
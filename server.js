var http = require('http');

var server = http.createServer(function(request, response) {
  response.write('Tjena');
  response.end();
});

server.listen(3000);
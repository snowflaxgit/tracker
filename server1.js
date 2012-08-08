var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '66.175.213.221');
console.log('Server running at http://66.175.213.221:8080/');
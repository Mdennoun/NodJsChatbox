
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Word !');
});
server.listen(3000);
/*

console.log("Hello Word");
*/

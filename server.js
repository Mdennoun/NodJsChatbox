
var http = require('http');

const hostname = "https://ancient-ridge-88345.herokuapp.com"

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Word');
});

const express = require('express')
const app = express()

app.get('hello/', function (req, res) {
  res.send('Hello World!')
})
var port = process.env.PORT || 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*

console.log(portport, hostname, );
*/

const http = require('http');

http.createServer((req, res) =>{
res.writeHead(200, {'Content-Type': 'text/plain'})
res.end("Hello world");
}).listen(8081)

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
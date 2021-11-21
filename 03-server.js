const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
})

server.listen(port, hostname, () => {
    console.log(`my server is running in port ${port} and host name is ${hostname} gggggggg  rtjhsthrsdh`)
})
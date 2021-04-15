
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log(`New connection on: ${socket.remoteAddress} ${socket.localAddress}  ${socket.localPort} `);
});

server.listen(3000);

console.log('Listening on port 3000');

import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Data \n');
});

const port = process.env.PORT || 3000;

server.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
);
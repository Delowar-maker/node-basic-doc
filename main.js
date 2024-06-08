const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Setting the status code, status message, and headers
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Writing response body
        res.write('<h1>this is the home page</h1>');
        // Ending the response
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>this is the about page</h1>');
        res.end();
    }
});

server.listen(3000);

console.log('Server running on port 3000');
const http = require('http');
var fs = require('fs');


const server = http.createServer((req, res) => {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});
server.listen(3000);

console.log('Server running on port 3000');

//10
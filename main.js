const http = require('http');
var fs = require('fs');
const { error } = require('console');


const server = http.createServer((req, res) => {
    fs.writeFile('demo.txt', 'hello world', function (error, data) {
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('File Write Failed');
            res.end();
        }
        else {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.write('File Write Successfully');
            res.end();
        }
    });

});
server.listen(3000);

console.log('Server running on port 3000');

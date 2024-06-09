const http = require('http');
var fs = require('fs');



const server = http.createServer((req, res) => {

    let error = fs.writeFileSync('demoSync.txt', 'Welcome to Sync file write');
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
server.listen(3000);

console.log('Server running on port 3000');

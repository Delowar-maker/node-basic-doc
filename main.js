const http = require('http');
var fs = require('fs');


const server = http.createServer((req, res) => {

    //Sync
    const myData = fs.readFileSync('index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myData);
    res.end();
});
server.listen(3000);

console.log('Server running on port 3000');

//15
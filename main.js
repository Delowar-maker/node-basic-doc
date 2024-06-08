const http = require('http');
const URL = require('url');


const server = http.createServer((req, res) => {
    const myURL = 'http://localhost:8080/default.htm?year=2017&month=february';
    const q = URL.parse(myURL, true);

    console.log(q.host); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/default.htm'
    console.log(q.search); //returns '?year=2017&month=february'

    var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    console.log(qdata.month); //returns 'february'
});
server.listen(3000);

console.log('Server running on port 3000');
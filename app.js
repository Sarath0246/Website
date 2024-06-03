var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(' hi -howr r u,\n');
}) .listen(3000, () => {
    console.log('Server running at http://localhost:8000/');
});

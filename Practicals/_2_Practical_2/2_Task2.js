const http = require('http');

const server = http.createServer((req, res) => {
  const { method } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (method === 'GET') {
    res.statusCode = 200;
    res.end('Received a GET request');
  } 
  
  else if (method === 'POST') {
    res.statusCode = 201;
    res.end('Received a POST request');
  } 
  
  else {
    res.statusCode = 405;
    res.end('Method not allowed');
  }
});

server.listen(3000, () => console.log('Server is running on port 3000'));

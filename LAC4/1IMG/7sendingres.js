const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html'); // Set the response header
  res.write('<html>'); // Start writing the response body
  res.write('<head><title>My First Page</title></head>'); // Write the head section
  res.write('<body><h1>Hello from my Node.js server!</h1></body>'); // Write the body section
   res.write('</html>');
   res.end(); // End the response
});



const PORT = 3001;
server.listen(PORT, () => { // type ctrl + c to stop the server
  console.log(`Server is running on http://localhost:${PORT}`);
})






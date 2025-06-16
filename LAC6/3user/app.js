const http = require('http');
const userRequestHandler = require('./user'); // Import the request handler from handler.js
const server = http.createServer(userRequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})





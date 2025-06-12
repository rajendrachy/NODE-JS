const http = require('http');
const requestHandler = require('./user'); // Import the user request handler from user.js

const server = http.createServer(requestHandler);


const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







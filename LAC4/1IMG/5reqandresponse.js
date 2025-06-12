const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});

const PORT = 3001;
server.listen(PORT, () => { // type ctrl + c to stop the server
  console.log(`Server is running on http://localhost:${PORT}`);
})






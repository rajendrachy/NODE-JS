const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to Home...</title></head>');
    res.write('<body><h1>Enter Your Details: </h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" value="male" id="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" value="female" id="female" />');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const parsed = new URLSearchParams(fullBody);
      const bodyObj = Object.fromEntries(parsed);

      console.log(bodyObj);

      // ✅ Write form data to file
      fs.writeFileSync('user.txt', JSON.stringify(bodyObj));

      // ✅ Redirect after data is handled
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return; // prevent fallback response
  }

  // Default fallback response
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

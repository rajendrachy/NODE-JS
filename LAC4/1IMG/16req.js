const http = require('http');
const fs = require('fs'); // Import the file system module to handle file operations
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/') {
    

  res.setHeader('Content-Type', 'text/html'); // Set the response header
  res.write('<html>'); // Start writing the response body
  res.write('<head><title>Welcome to Home...</title></head>'); // Write the head section
  res.write('<body><h1>Enter Your Details: </h1>');

res.write('<form  action="/submit-details" method="POST">'); // Create a form with POST method
res.write('<input type="text" name="username" placeholder="Enter your name">');

res.write('<label for="male" >Male</label>')
res.write('<input type="radio" name="gender" value="male" id="male" />')

res.write('<label for="female" >Female</label>')
res.write('<input type="radio" name="gender" value="female" id="female" />')

res.write('<input type="submit" value="Submit">');
res.write('</form>');



    res.write('</body>'); 
   res.write('</html>');
   return res.end(); // End the response
  } else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST') {
    // Handle form submission
   fs.writeFileSync('user.txt', 'Rajendra Chaudhary');
   res.statusCode = 302; // Set the status code to 302 for redirection
   res.setHeader('Location', '/'); // Redirect to the home page

  }




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









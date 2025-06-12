const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
  

    if(req.url === '/home') {
      res.write('<h1>Welcome to Home...</h1>');
    }  else if(req.url === '/men') {
      res.write('<h1>Welcome to Men\'s Section...</h1>');
    } else if(req.url === '/women') {
      res.write('<h1>Welcome to Women\'s Section...</h1>');
    } else if(req.url === '/kids') {
      res.write('<h1>Welcome to Kids\'s Section...</h1>');
    } else if(req.url === '/cart') {
      res.write('<h1>Welcome to Cart\'s Section...</h1>');
    } 



res.write(
  `
  <html>
  <head>
   <body>
   <head>
   <nav> 
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/men">Men</a></li>
      <li><a href="/womwn">Women</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/cart">Cart</a></li>
   </nav>
   </head>
   </body>
  </head>
  </html>
  `
);

res.end();

});


server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
})
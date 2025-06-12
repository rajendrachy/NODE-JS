 const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write(
        `
        <html>
        <head><title>Practice Set</title></head>  
        <body> <h1> Welcome to the Calculator App</h1>
    <a href = "/calculator">Go to Calculator</a>
        </body>
        </html>
        `

        
      );
      return res.end();
      
    } else if(req.url.toLowerCase() === "/calculator") {


      res.setHeader('Content-Type', 'text/html');
      res.write(
        `
        <html>
        <head><title>Practice Set</title></head>  
        <body> <h1> Here is the Calculator</h1>

        <form action="/calculate-result" method="POST"> 


     <input type="text" placeholder="Enter first number" name="first" />

      <input type="text" placeholder="Enter second number" name="second" />

 <input type="submit" value="Sum" />


      </form>
        </body>
        </html>
        `

        
      );
      return res.end();

    }  else if(req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
      sumRequestHandler(req, res);
     return; // prevent fallback response

    }



     res.setHeader('Content-Type', 'text/html');
      res.write(
        `
        <html>
        <head><title>Practice Set</title></head>  
        <body> <h1> 404 Page doesnot exists </h1>
    <a href = "/">Go to Home</a>

        </body>
        </html>
        `

        
      );
      return res.end();
}

exports.requestHandler = requestHandler;

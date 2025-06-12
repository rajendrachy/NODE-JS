const { url } = require("inspector");

const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Number", req.url);

const body = [];
  req.on('data', (chunk) => {
      body.push(chunk);

  })



  req.on('end', () => {
   const bodyStr =  Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);

    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);

    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log("Sum is", res);






     res.setHeader('Content-Type', 'text/html');
      res.write(
        `
        <html>
        <head><title>Practice Set</title></head>  
        <body> <h1>Your result is${result} </h1>
    <a href = "/calculator">Go to Calculator</a>
        </body>
        </html>
        `

        
      );
      return res.end();

  });
};



exports.sumRequestHandler = sumRequestHandler;

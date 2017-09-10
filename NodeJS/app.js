const http = require('http');

http.createServer((request, response) => {
  const {headers, method, url} = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // do stuff with the body
  });
}).listen(3000);



// const http = require('http');
//
//
// const server = http.createServer((req, res) =>{
//   if(req.url == '/hello'){ //end point
//     res.write('<html><h1>HELLO FRIEND</h1></html>');
//   }else if(req.url == '/bye') {
//     res.write('<html><h1>BYE FRIEND</h1></html>');
//   }else if(req.url == '/search?t=hello') {
//     res.write('<html><h1>will search for hello</h1></html>');
//   }else if (req.url == '/search?t=hello&filter=1,2,3') {
//     res.write('<html><h1>Will search for hello and filters set to 1, 2, 3<h1></html>');
//   }
//
//   res.end();
// })
//
// server.listen(3000);



//console.log(server.listen())

// const server = http.createServer();
// server.on('req', (req, res)=>{

// }).listen(3000);

const http = require('http');
const fs = require('fs');
const tweetFile = fs.existsSync(__dirname + '/tweets.json')


const server = http.createServer((req, res) => {
  console.log('request was made' + req.url);
  const {headers, method, url} = req;
  let body = [];
  req.on('error', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
  })


  if(req.url === '/tweets' ){

    if(!tweetFile && (method == 'POST' || method == 'PUT') ) {
      fs.createReadStream(__dirname + '/readMe.json', 'utf8').pipe(fs.createWriteStream(__dirname + '/tweets.json'))
      res.end('post or put request, tweet file was created')

    } else if(tweetFile && (method == 'POST' || method == 'PUT') ){
      fs.createReadStream(__dirname + '/readMe.json', 'utf8').pipe(fs.createWriteStream(__dirname + '/tweets.json'))
      res.end('post or put request, existing file was updated')

    } else res.end('nothing to see here')

  } else if(req.url === '/tweets-list')
    if(tweetFile && method == 'GET'){
      fs.readFile(__dirname + '/tweets.json', 'utf8', (err, tweets) =>{
        res.end(tweets)
    })
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('ERROR 404')
  }
});

server.listen(3000,'127.0.0.1');
console.log('listening to port 3000');

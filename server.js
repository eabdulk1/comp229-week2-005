const http = require('http');
http.createServer((req,res) => {
res.writeHead(200,{

    "content-Type":'text/plain'
});
res.end(Hello.world);
}).listen(3080);

console.log('server running at http://localhost:300');


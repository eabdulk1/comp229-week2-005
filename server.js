const connect = require('connect');
const app =connect();
function helloworld(req,res,next){

    res.setHeader('Content-Type','text/plain');
    res.end('hello world');

}
//first custom middleware
app.use(helloworld);
app.listen(300);

console.log('Server is running at http://localhost:300/');


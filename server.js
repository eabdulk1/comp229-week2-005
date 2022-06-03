const connect = require('connect');
const app =connect();

function logger (req,res,next){
console.log(req,res,next);

};



function helloworld(req,res,next){

    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');

}


function goodbyeWorld(req,res,next){

    res.setHeader('Content-Type','text/plain');
    res.end('goodbye World');

}
app.use(logger);
app.use('/hello', helloworld);
app.use('/goodbye', goodbyeWorld);

//first custom middleware

app.listen(3000);
console.log('Server is running at http://localhost:3000/');

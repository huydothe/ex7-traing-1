const http = require('http');
const fs = require('fs');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;
const port = 3000;


const server = http.createServer((req, res)=>{
    const parseUrl = url.parse(req.url,true)
    const queryStringObject = parseUrl.query;
    res.end('Hello Node.js');
    console.log(queryStringObject);


})


server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
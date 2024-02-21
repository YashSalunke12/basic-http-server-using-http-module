// using http module (inbuilt given by node) we can setup a basic server
const http = require('http');
const PORT = 3000;

/**
 * Http module contains a function called as createServer()
 * This createServer function takes a callback as a input
 * Now inside the callback we get two arguments
 *  - request --> this argument contains all the details about incoming requests
 *  - response --> this argument contains functions using which we can prepare the response
 * 
 * The createServer function returns us the server object 
 */

const server = http.createServer(function process(request, response) {
    console.log(request.method);
    if(request.url == '/home') {
        response.end("welcome to home");
    }
    else {
        response.end("Hello World");
    }
});

server.listen(PORT, function exec() {
    console.log("Server is running at port", PORT);
});
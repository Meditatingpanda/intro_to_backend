const  logEvent  = require("./logEvent");
const EventEmitter = require("events");
const http=require('http')
const fs=require('fs');
const path=require('path')
const fsPromises=require('fs').promises;
//class MyEmitter extends EventEmitter {}
//initializie object
//const myEmitter = new MyEmitter();
//add listener for the log event
// myEmitter.on("log", (msg) => logEvent(msg));
// setTimeout(() => {
//   //emit event
//   myEmitter.emit("log", "Gyana Ranjan Panda");
// }, 2000);

const emitter=new EventEmitter();

const PORT=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
   res.statusCode=200;
   res.setHeader('Content-Type','text/html')
   res.end('<h1>Hello, World!</h1>');
})

server.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
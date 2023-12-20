const http=require("http");
const fs=require("fs");
const myserver=http.createServer((req,res)=>{
const log=`${Date.now()}:${req.url}:New request received!\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hii from Server");
    })
    switch(req.url){
        case "/":res.end("<h1>HOMEPAGE</h1>")
        break;
        case "/about":res.end("<h1>ABOUT PAGE")
        break;
        default:res.end("<h1>404 NOT FOUND</h1>")
    }
    
    
})

myserver.listen(8000,()=>{
    console.log("Server started at 8000");
})
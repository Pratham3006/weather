const http=require("http");
const { type } = require("os");
const fs=require("fs");
console.log(__dirname)


const server=http.createServer((req,res)=>{
    if(req.url =="/"){
        res.end("<h1 align-items=center > server is working </h1>")
    }
    else if(req.url =="/about"){
        res.end("welcome to the about page");

    }
    else if(req.url =="/contact"){
        res.end("welcome to the contact page");

    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/api/userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            console.log(err)
            res.end(data)


        })
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("Erorr 404 not working");
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000")
})

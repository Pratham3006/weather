const express=require("express");
const app=express();
let port=5000;
app.get("/",(req,res)=>{
    res.end("I am server")
})
app.get("./sendemail",)
const start=async ()=>{
try{
    app.listen(port,()=>{
        console.log(`I am on the port ${port}`)
    });
}
catch(error){}
}

start();
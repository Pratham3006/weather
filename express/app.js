const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1> Hello this is the home Page </h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1> Hello this is the about Page </h1>")
})
app.get("/contact",(req,res)=>{
    res.status(200).send("<h1> Hello this is the contact Page </h1>")
})
app.get("/data",(req,res)=>{
   res.send([{
    id:1,
    name:"Pratham",
   },{
    id:1,
    name:"Pratham",
   }])
})

app.listen(8000,()=>{
    console.log("listening to port 8000");
})
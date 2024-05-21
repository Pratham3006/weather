const express=require("express");
const app=express();
const port =process.env.PORT||3000;
const path=require("path");
const htmlRoute=path.join(__dirname,"../public")
console.log(htmlRoute)
app.use(express.static(htmlRoute))
app.get("/",(req,res)=>{
    res.send("welcome to the project")
})
app.get("/about",(req,res)=>{
    res.send("welcome to the about page")
})
app.get("/weather",(req,res)=>{
    res.send("welcome to the weather page")
})
app.get("*",(req,res)=>{
    res.send("PAGE does not exist")

})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
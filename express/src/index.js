const express=require("express");
const app=express();
const path=require("path")
const route=path.join(__dirname,'../public');

console.log(__dirname);
app.set("view engine","hbs");
//app.use(express.static(route))//
app.get("",(req,res)=>{
    res.render("index");
})
app.get('/',(req,res)=>{
    res.status(200).send("hello this is the home page")
})
app.listen(8000,()=>{
    console.log("listening to port 8000");
})
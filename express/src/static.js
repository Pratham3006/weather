const express=require("express");
const app=express();
const path=require("path");

console.log(__dirname)
const staticPath=path.join(__dirname,"../public");
console.log(staticPath)
app.use(express.static(staticPath));
app.listen(5000,()=>{
    console.log("8000 is live now")
})

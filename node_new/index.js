const {add,sub,name}=require('./routes')

const os=require("os");
setTimeout(()=>{
    console.log(os.arch());
},3000);
console.log(add(5,10));
console.log(sub(5,5));
console.log(name);


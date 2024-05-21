const eventEmitter=require("events");
const event=new eventEmitter();
event.on('sayMyName',()=>{
    console.log("your name is Pratham")
})
event.on('Page',(sc,msg,x)=>{
    console.log(`status code is ${sc}`);
    console.log(`status message is ${msg}`)
})
event.on('sayMyName',()=>{
    console.log("your name is Ansh")
})

event.emit("sayMyName");
event.emit('Page',200,"ok")
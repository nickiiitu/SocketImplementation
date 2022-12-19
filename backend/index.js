const express=require("express");
// const http=require("http");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const app=express();
app.use(cors(corsOptions)); // Use this after the variable declaration

          const server=app.listen("5005",()=>{
            console.log("connected");
})


const io=require("socket.io")(server,{
  cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST","PATCH","UPDATE","DELETE"]
      }
});

io.on("connect",(socket)=>{
console.log(socket.id); 
socket.on("codeWritten",(data,room)=>{
    if(room){
      socket.to(room).emit("recieveCode",data)
}
      // else{
      // socket.broadcast.emit("recieveCode",data)   
      // }
  });
  socket.on("joinRoom",(room)=>{
      console.log(socket.id,"room")
      socket.join(room);
    });
  socket.on("leave",(room)=>{
    socket.leave(room);
  })
})
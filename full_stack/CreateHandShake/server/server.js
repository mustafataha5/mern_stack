
const express = require('express')

const app = express() ;

const server = app.listen(8000,()=>{console.log("Server is listen to port 8000")})


const io = require('socket.io')(server, { cors: true }); 

io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)");
    socket.emit('h3',"I'am here h3");
    socket.emit('h',"I'am here");
    socket.emit('h1',"I'am here h1");

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

    socket.on("message", (msg)=> {
        console.log(msg);
        io.emit('message', msg);
      });
    //socket.emit("Welcome",{message:"anything "});
})
const express = require('express') ; 

const app =express() ; 

const port = 8000 ; 





const server = app.listen(port,()=> console.log(`Server listen to port ${port}`));


const io = require('socket.io')(server,{cors:true})

io.on("connection", (socket) => {
    socket.emit("hello", "world");
  });
io.on('connection',socket => {
    console.log(socket.id);
    socket.on('event_from_client',data => {
        socket.broadcast.emit("send_data_to_all_other_clients",data);
    });
});
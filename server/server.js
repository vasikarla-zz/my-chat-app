const express = require('express');
const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '/../public');
const app = express();
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const {generateMessage} = require('./utils/message');
var os= require('os');
var io = socketIO(server);

app.use(express.static(publicPath));

//Default Eventss
io.on("connection", (socket) => {
    console.log("Server Connection : On")

    //Welcome to Chat App
    socket.emit("newMessage", generateMessage("Admin", "Welcome to Chat App"));
    socket.broadcast.emit("newMessage", generateMessage("Admin", "New User Joined"));

    //Custom Events
    socket.on("createMessage", (message) => {
        console.log("Create Message Event", message);
        socket.emit('newMessage', generateMessage(message.from, message.text)) 
    });

    socket.on("disconnect", () => {
        console.log("Server Connection : OFF");
    })
});


//Start and Listen
server.listen(PORT, () => {
    console.log(`Server is up on port : ${PORT}`);
});
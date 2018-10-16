const express = require('express');
const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '/../public');
const app = express();
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

//Default Eventss
io.on("connection", (socket) => {
    console.log("Server Connection : On")

    //Custom Events
    socket.emit("newEmail", {
        from: "Raj Vasikarla",
        text: "Howdy!!",
        createdAt : new Date().getDate
    });

    socket.emit("impEvent", {
        from: "Raj Vasikarla",
        to: "Swetha Yerramsetti!!"
    });

    socket.on("createEmail", (newEmail) => {
        console.log("Create Email Event", newEmail);
    });

    socket.on("disconnect", () => {
        console.log("Server Connection : OFF");
    })
});



//Start and Listen
server.listen(PORT, () => {
    console.log(`Server is up on port : ${PORT}`);
});
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
server.listen(PORT, () => {
    console.log(`Server is up on port : ${PORT}`);
})
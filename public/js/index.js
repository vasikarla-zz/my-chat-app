var socket = io();
console.log(socket);

socket.on("connect",  function() {
    console.log("Client Connection : ON");
});

socket.on("disconnect", function () {
    console.log("Client Connection : OFF.");
});
var socket = io();
console.log(socket);

socket.on("connect",  function() {
    console.log("Client Connection : ON");
});

socket.emit("createEmail", {
    to: "raj@intuit.com",
    from: "swetha@ridecell.com",
    text: "Hi"
})

socket.on("disconnect", function () {
    console.log("Client Connection : OFF.");
});

socket.on("newEmail", function (email) {
    console.log("New Email Event : Client", email);
});

socket.on("impEvent", function () {
    console.log("Looks like an important Event");
}); 
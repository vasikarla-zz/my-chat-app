var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var list = jQuery("<li></li>");
  list.text(`${message}`);
  jQuery("messages").append(list);
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hi'
}, function (data) {
  console.log('Got it', data);
});


$("#message-form").on('submit', function (e) {
    console.log(e);
    e.preventDefault();


    socket.emit('createMessage', {
        from: "User",
        text: jQuery("#message").val()
    }, function () {
        console.log("Ack");
    });

});
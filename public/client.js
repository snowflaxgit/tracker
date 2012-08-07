$(function() {
    
    var send = function() {
      /*  socket.emit('message', input.val());
        messages.prepend('<li><span><b>' + socket.socket.sessionid + '</b></span> ' + input.val() + '</li>');
        input.val(''); */
    };

	setInterval(function(){
		send();
		},5000);
});
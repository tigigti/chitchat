var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

io.on("connection",function(socket){
    io.emit("chatMessage","User connected");

    socket.on("disconnect",function(){
        console.log("User Disconnected");
        io.emit("chatMessage","User disconnected");
    });

    socket.on("chatMessage",function(data){
        io.emit("chatMessage",data.name+": "+data.msg);
    });

});

http.listen(3000,function(){
    console.log("Listening on 3000");
});
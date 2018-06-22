var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);


// To serve css and other static files
app.use(express.static("public"));

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

http.listen(8080,function(){
    console.log("Listening on 8080");
});
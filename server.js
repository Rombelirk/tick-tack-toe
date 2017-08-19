let express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    bodyParser = require('body-parser'),
    path = require("path");

server.listen(3000);
console.log("connected");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var connections = [];

io.on('connection', function (socket) {

    connections.push(socket.id);
    io.emit("newPlayer", {data: connections});


    socket.on('buttonPressed', function (data) {

        socket.emit("back", {data: "в обраточку"});
    });
    socket.on('hui', function (data) {
        console.log(data);

    });
});
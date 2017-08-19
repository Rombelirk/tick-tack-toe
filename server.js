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

app.get('/',  (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let playersList = [];

io.on('connection', socket => {

    playersList.push({playerId : socket.id, playerName: "Unknown Player"});
    io.emit("getPlayersList", {playersList});


    socket.on('disconnect', data => {

        playersList.splice(playersList.findIndex(el => el.playerId === socket.id), 1);
        io.emit("getPlayersList", {playersList});

    });

    socket.on("setPlayerName", data => {

        playersList[playersList.findIndex(el => el.playerId === socket.id)].playerName = data.name;
        io.emit("getPlayersList", {playersList});
    });



});
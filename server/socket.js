import server from "./server";
import socketIo from "socket.io";

const io = socketIo(server);

const playersList = [],
    playersSearchingForGame = [];


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

    socket.on("startGameSearching", data => {
        if (playersSearchingForGame.length < 1) {
            playersSearchingForGame.push(playersList[playersList.findIndex(el => el.playerId === socket.id)]);
        } else {
            let opponentsID = playersSearchingForGame[0].playerId;
            socket.to(opponentsID).emit('gameFound', {data: "Game found!"}); //TODO:  try comma
            socket.emit('gameFound', {data: "Game found!"});
            playersSearchingForGame.splice(playersList.findIndex(el => el.playerId === opponentsID || el.playerId === socket.id), 1);
        }
    });

    socket.on("stopGameSearching", data => {

        playersSearchingForGame.splice(playersList.findIndex(el => el.playerId === socket.id), 1);
    });

});

export default io;

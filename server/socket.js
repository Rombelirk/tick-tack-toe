import server from "./server";
import socketIo from "socket.io";
import uuid from "uuid";

const io = socketIo(server);

const playersList = [],
    playersSearchingForGame = [],
    currentGames = {};


io.on('connection', socket => {

    playersList.push({playerId: socket.id, playerName: "Unknown Player"});
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

        //check if there is an opponent in the queue

        if (playersSearchingForGame.length < 1) {
            playersSearchingForGame.push(playersList[playersList.findIndex(el => el.playerId === socket.id)]);
        } else {

            // remove the opponents from the queue and write down the game data

            let opponent = playersSearchingForGame.splice(0, 1)[0];


            // playersSearchingForGame.splice(playersList.findIndex(el => el.playerId === socket.id), 1);
            let newGameId = uuid();
            currentGames[newGameId] = {opponents: [opponent.playerId, socket.id]};



            //send game data to socket's opponent

            socket.to(opponent.playerId).emit('gameFound', {

                    game: {
                        [newGameId]: Object.assign({}, currentGames[newGameId])
                    },
                    opponent: {
                        name: playersList[playersList.findIndex(el => el.playerId === socket.id)].playerName,
                        id: socket.id
                    }




            });

            //send game data to the socket itself

            socket.emit('gameFound', {

                    game: {
                        [newGameId]: Object.assign({}, currentGames[newGameId])

                    },
                    opponent: {

                        name: opponent.playerName,
                        id: opponent.playerId

                    }

            });

        }
    });

    socket.on("stopGameSearching", data => {

        playersSearchingForGame.splice(playersList.findIndex(el => el.playerId === socket.id), 1);
    });


});

export default io;

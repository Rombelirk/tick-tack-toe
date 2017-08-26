import server from "./server";
import socketIo from "socket.io";
import uuid from "uuid";
import {
    playerConnected,
    playerDisconnected,
    setPlayerName,
    startGameSearching
} from "./actions/mainHallActions";

const io = socketIo(server);

const playersList = [],
    playersSearchingForGame = [],
    currentGames = {};

export default io;


io.on('connection', socket => {

    playerConnected(socket.id);

    socket.on('disconnect', () => playerDisconnected(socket.id));

    socket.on("setPlayerName", data => setPlayerName(socket.id, data.name));

    socket.on("startGameSearching", () => {

        startGameSearching(socket);

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



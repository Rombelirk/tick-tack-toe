import io from "../socket";
import uuid from "uuid";
import {store} from "../store";

export const playerConnected = (id) => {
    store.dispatch({type: "PLAYER_CONNECTED", id});
    io.emit("getPlayersList", {playersList: store.getState().mainHall.playersList});
};

export const playerDisconnected = (id) => {
    store.dispatch({type: "PLAYER_DISCONNECTED", id});
    io.emit("getPlayersList", {playersList: store.getState().mainHall.playersList});
};

export const setPlayerName = (id, name) => {
    store.dispatch({type: "SET_PLAYER_NAME", data: {id, name}});
    io.emit("getPlayersList", {playersList: store.getState().mainHall.playersList});
};

export const startGameSearching = (socket) => {
    let playersSearchingForGame = store.getState().mainHall.playersSearchingForGame,
        currentGames = store.getState().mainHall.currentGames,
        playersList = store.getState().mainHall.playersList;

    if (playersSearchingForGame.length === 0) {
        store.dispatch({type: "ADD_PLAYER_TO_QUEUE", id: socket.id});
        socket.emit('gameSearchStarted');

    } else {
        //todo: try with comma
        let newGameId = uuid(),
            opponentId = playersSearchingForGame[0];

        store.dispatch(
            {type: "REMOVE_PLAYERS_FROM_QUEUE", id: [socket.id, opponentId]},
            {type: "CREATE_MATCH_PAIR", data: {newGameId, id: [socket.id, opponentId]}}
        );

        socket.to(opponentId).emit('gameSearchStopped');
        socket.to(opponentId).emit('gameFound', {
            game: {
                [newGameId]: currentGames[newGameId]
            },
            opponent: {
                name: playersList[socket.id].playerName,
                id: socket.id
            }
        });

        socket.emit('gameSearchStopped');
        socket.emit('gameFound', {
            game: {
                [newGameId]: currentGames[newGameId]
            },
            opponent: {
                name: playersList[opponentId].playerName,
                id: opponentId
            }
        });



    }
};

export const stopGameSearching = (socket) => {
    store.dispatch({type: "REMOVE_PLAYERS_FROM_QUEUE", id: socket.id});
    socket.emit('gameSearchStopped');
};
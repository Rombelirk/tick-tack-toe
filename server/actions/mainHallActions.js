import io from "../socket";
import uuid from "uuid";

export const playerConnected = (id) => {
    return (dispatch, getState) => {

        dispatch({type: "PLAYER_CONNECTED", id});
        io.emit("getPlayersList", {playersList: getState().mainHall.playersList});
    }
};

export const playerDisconnected = (id) => {
    return (dispatch, getState) => {

        dispatch({type: "PLAYER_DISCONNECTED", id});
        io.emit("getPlayersList", {playersList: getState().mainHall.playersList});
    }
};

export const setPlayerName = (id, name) => {
    return (dispatch, getState) => {

        dispatch({type: "SET_PLAYER_NAME", data: {id, name}});
        io.emit("getPlayersList", {playersList: getState().mainHall.playersList});
    }
};


export const startGameSearching = (socket) => {
    return (dispatch, getState) => {

        let playersSearchingForGame = getState().mainHall.playersSearchingForGame.slice(),
            currentGames = Object.assign({}, getState().mainHall.currentGames),
            playersList = Object.assign({}, getState().mainHall.playersList);

        if (playersSearchingForGame.length === 0) {
            dispatch({type: "ADD_PLAYER_TO_QUEUE", id: socket.id});
        } else {
            //todo: try with comma

            let newGameId = uuid(),
                opponentId = playersSearchingForGame[0];

            dispatch({type: "REMOVE_PLAYERS_FROM_QUEUE", id: [socket.id, opponentId]});
            dispatch({type: "CREATE_MATCH_PAIR", data: {newGameId, id: [socket.id, opponentId]}});

            socket.to(opponentId).emit('gameFound', {
                game: {
                    [newGameId]: currentGames[newGameId]
                },
                opponent: {
                    name: playersList[socket.id].playerName,
                    id: socket.id
                }
            });

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

        dispatch({type: "SET_PLAYER_NAME", data: {id, name}});
        io.emit("getPlayersList", {playersList: getState().mainHall.playersList});
    }
};
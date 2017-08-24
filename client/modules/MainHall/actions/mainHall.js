// import * as constants from "src/constants";
import socket from "src/socket";

export const setPlayerList = (players) => {
    return (dispatch) => {
        dispatch({type: "SET_PLAYERS_LIST", players})
    }
};

export const setPlayerName = (name) => {
    return (dispatch) => {
        socket.emit("setPlayerName", {name});
    }
};

export const searchGame = () => {
    return (dispatch) => {
        console.log("act");
        socket.emit("startGameSearching");
    }
};



export const gameIsFound = (data) => {
    return (dispatch) => {

        dispatch({type: "GAME_IS_FOUND", data})
    }
};


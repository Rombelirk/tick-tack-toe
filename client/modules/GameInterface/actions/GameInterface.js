import socket from "src/socket";

export const setPlayerList = (players) => {
    return (dispatch) => {
        dispatch({type: "SET_PLAYERS_LIST", players})
    }
};


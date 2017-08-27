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

export const startGameSearching = () => {
    return () => {
        socket.emit("startGameSearching");
    }
};

export const stopGameSearching = () => {
    return () => {
        socket.emit("stopGameSearching");
    }
};

export const gameSearchStarted = () => {
  return (dispatch) => {
      dispatch({type: "GAME_SEARCH_STARTED"});
  }
};

export const gameSearchStopped = () => {
    return (dispatch) => {
        dispatch({type: "GAME_SEARCH_STOPPED"});
    }
};



export const gameIsFound = (data) => {
    return (dispatch) => {
        dispatch({type: "GAME_IS_FOUND"});
        dispatch({type: "LOAD_GAME_DATA", data});
    }
};

export const quitGame = () => {
  return (dispatch) => {
      dispatch({type: "QUIT_GAME"});
  }
};






const initialState = {
    playersList: {},
    playersSearchingForGame: [],
    currentGames: {}
};

export const mainHallReducer = (state = initialState, action) => {

    const playersList = Object.assign({}, state.playersList),
        playersSearchingForGame = state.playersSearchingForGame.slice();
    switch (action.type) {

        case "PLAYER_CONNECTED":

            playersList[action.id] = { playerName: "Unknown Player"};
            return {...state, playersList};
            break;

        case "PLAYER_DISCONNECTED":

            delete playersList[action.id];
            return {...state, playersList};
            break;

        case "SET_PLAYER_NAME":
            playersList[action.data.id].playerName = action.data.name;
            return {...state, playersList};
            break;

        case "ADD_PLAYER_TO_QUEUE":
            playersSearchingForGame.push(action.id);
            return {...state, playersSearchingForGame};
            break;

        case "REMOVE_PLAYERS_FROM_QUEUE":
            if (typeof action.id === "object") {
                action.id.map((el) => playersSearchingForGame.splice(playersSearchingForGame.indexOf(el),1))
            } else {
                playersSearchingForGame.splice(playersSearchingForGame.indexOf(action.id),1)
            }
            return {...state, playersSearchingForGame};
            break;


        default:
            return state;

    }
};
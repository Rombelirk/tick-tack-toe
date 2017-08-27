const initialState = {
    playersList: {

    },
    searchingForGame: false,
    gameFound : false,
    currentGame: {

        opponentsName: ""
    }
};

export const mainHallReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PLAYERS_LIST":
            return {...state, playersList: action.players};
            break;

        case "GAME_IS_FOUND":
            return {...state, gameFound: true};
            break;

        case "QUIT_GAME":
            return {...state, gameFound: false};

        case "GAME_SEARCH_STARTED":
            return {...state, searchingForGame: true};
            break;

        case "GAME_SEARCH_STOPPED":
            return {...state, searchingForGame: false};
            break;

        default:
            return state;
    }
};

import * as constants from "src/constants/index";

const initialState = {
    playersList: [

    ],
    gameFound : false
};

export const mainHallReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PLAYERS_LIST":
            return {...state, playersList: action.players};
            break;

        case "GAME_IS_FOUND":
            console.log("game is found");

            return {...state, gameFound: true};
            break;

        default:
            return state;
    }
};
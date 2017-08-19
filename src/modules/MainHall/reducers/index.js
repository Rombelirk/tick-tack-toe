
import * as constants from "src/constants/index";

const initialState = {
    playersList: [

    ]
};

export const mainHallReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PLAYERS_LIST":
            return {...state, playersList: action.players};
            break;


        default:
            return state;
    }
}
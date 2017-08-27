const initialState = {
    opponentsName: ""
};

export const gameInterfaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_GAME_DATA":
            return {...state, opponentsName: action.data.opponent.name};
            break;

        default:
            return state;
    }
};
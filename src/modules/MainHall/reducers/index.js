const initialState = {
    playersList: [
        {
            playerName: "Roman"
        },
        {
            playerName: "Elena"
        }
    ]
};

export const mainHallReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, number: state.number + 1};
            break;

        case "DECREMENT":
            return {...state, number: state.number - 1};
            break;

        default:
            return state;
    }
}
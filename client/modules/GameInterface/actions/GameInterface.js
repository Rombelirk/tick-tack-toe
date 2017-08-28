export const quitGame = () => {
    return (dispatch) => {
        dispatch({type: "QUIT_GAME"});
    }
};

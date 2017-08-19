export const incrementNumber = () => {
    return (dispatch, getState) => {
        dispatch({type: "INCREMENT"})
    }
};


export const decrementNumber = () => {
    return (dispatch, getState) => {
        dispatch({type: "DECREMENT"})
    }
};
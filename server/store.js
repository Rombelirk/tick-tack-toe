import { createStore, combineReducers, applyMiddleware } from "redux";
import { mainHallReducer } from "./reducers/mainHallReducer";
import { gameInterfaceReducer } from "./reducers/gameInterfaceReducer";
import reduxThunk from 'redux-thunk';

let rootReducer = combineReducers({
    mainHall: mainHallReducer,
    gameInterface: gameInterfaceReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
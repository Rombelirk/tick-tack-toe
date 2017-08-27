import { createStore, combineReducers } from "redux";
import { mainHallReducer } from "./reducers/mainHallReducer";
import { gameInterfaceReducer } from "./reducers/gameInterfaceReducer";

let rootReducer = combineReducers({
    mainHall: mainHallReducer,
    gameInterface: gameInterfaceReducer
});

export const store = createStore(rootReducer);


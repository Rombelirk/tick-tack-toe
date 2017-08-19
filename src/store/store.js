import { createStore, combineReducers, applyMiddleware } from "redux";
import { mainHallReducer } from "modules/MainHall/reducers";
import reduxThunk from 'redux-thunk';

let rootReducer = combineReducers({
    mainHall: mainHallReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
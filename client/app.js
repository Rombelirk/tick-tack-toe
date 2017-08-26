
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import store from "./store/store";
import "../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import MainHall from "modules/MainHall";
import GameInterface from "modules/GameInterface";


ReactDOM.render(
    <div>

            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path='/' component={MainHall}/>
                        <Route path='/game' component={GameInterface}/>
                    </div>
                </Router>
            </Provider>

    </div>
    , document.getElementById("root")
);


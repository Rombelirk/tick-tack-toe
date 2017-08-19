
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./store/store";
import "../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import MainHall from "modules/MainHall";


ReactDOM.render(
    <div>

            <Provider store={store}>
                <Router>
                    <div>

                        <MainHall/>

                    </div>
                </Router>
            </Provider>

    </div>
    , document.getElementById("root")
);


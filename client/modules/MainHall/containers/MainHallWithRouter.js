import { withRouter } from "react-router-dom";
import MainHall from "../components/MainHall";
import React from "react";


class MainHallWithRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        if (this.props.mainHall.gameFound) {
            this.props.history.push('/game');
        }
    }


    render() {
            return <MainHall {...this.props}/>;
    }
}

export default withRouter(MainHallWithRouter);




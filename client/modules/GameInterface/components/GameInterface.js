import React from "react";
import socket from "src/socket/index";


export default class MainHall extends React.Component{
    constructor(props) {
        super(props);


    }

    componentDidMount() {


    }



    render() {
        return(
            <div>
                Your opponent is {this.props.gameInterface.opponentsName}!
            </div>

        )
    }
}



import React from "react";

export default class MainHall extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                Your opponent is {this.props.gameInterface.opponentsName}!
            </div>
        )
    }
}



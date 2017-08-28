import React from "react";

export default class MainHall extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.quitGame();
    }

    render() {
        return(
            <div>
                <p className="bg-info game-alert">Your opponent is {this.props.gameInterface.opponentsName}!</p>
            </div>
        )
    }
}



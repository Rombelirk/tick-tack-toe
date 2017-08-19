import React from "react";

import PlayersList from "./PlayersList";

export default class MainHall extends React.Component{
    constructor(props) {
        super(props);


    }



    render() {
        return(
            <div>

                <PlayersList playersList={this.props.mainHall.playersList}/>
            </div>

        )
    }
}



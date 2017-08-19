import React from "react";
import PlayersList from "./PlayersList";
import socket from "src/socket";
import NameInput from "modules/MainHall/components/NameInput";

export default class MainHall extends React.Component{
    constructor(props) {
        super(props);


    }

    componentDidMount() {

        socket.on('getPlayersList', data => this.props.setPlayerList(data.playersList))
    }



    render() {
        return(
            <div>
                <PlayersList playersList={this.props.mainHall.playersList}/>
                <NameInput submit={this.props.setPlayerName} />
            </div>

        )
    }
}



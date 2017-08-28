import React from "react";
import PlayersList from "./PlayersList";
import SearchForGame from "./SearchForGame"
import socket from "src/socket";
import NameInput from "modules/MainHall/components/NameInput";

export default class MainHall extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        socket.on('getPlayersList', data => this.props.setPlayerList(data.playersList));
        socket.on ('gameFound', data => {
            this.props.gameIsFound(data);

        });
        socket.on('gameSearchStarted', () => {
            this.props.gameSearchStarted();
        });
        socket.on('gameSearchStopped', () => {
            this.props.gameSearchStopped();
        });
    }





    render() {
        return(
            <div className="container main-hall">
                <PlayersList playersList={this.props.mainHall.playersList}/>
                <NameInput submit={this.props.setPlayerName} />
                <SearchForGame stopGameSearching={this.props.stopGameSearching}
                               startGameSearching={this.props.startGameSearching}
                               searchingForGame={this.props.mainHall.searchingForGame}
                />
            </div>

        )
    }
}



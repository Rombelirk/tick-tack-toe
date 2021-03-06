import React from "react";
import socket from "src/socket";


export default class PlayersList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        socket.emit('works', {data: "it works!"});
    }

    render() {
        let players = [];
        for (let key in this.props.playersList) {
            players.push({playerId: key, playerName:this.props.playersList[key].playerName})
        }

        return(
            <div className="players-list">
                <h3>
                    Players List:
                </h3>

                <div>
                    {
                        players.map(el => <div key={el.playerId}>{el.playerName}</div>)
                    }
                </div>
            </div>
        )
    }
}



import React from "react";
import "../styles/MainHall.scss";
import socket from "src/socket";


export default class PlayersList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        socket.emit('works', {data: "it works!"});
    }

    render() {


        return(
            <div>
                <h3>
                    Players List:
                </h3>

                <div className="main-hall-container">
                    {
                        this.props.playersList.map(el => <div key={el.playerId}>{el.playerName}</div>)
                    }
                </div>
            </div>
        )
    }
}



import React from "react";
import "../styles/MainHall.scss";
import io from "socket.io-client";


export default class PlayersList extends React.Component{
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.socket = io('http://localhost:3000');
        console.log(this.socket);
        this.socket.emit("hui", {data: "hui"});
    }

    render() {


        return(
            <div className="main-hall-container">
                {
                    this.props.playersList.map(el => <div>{el.playerName}</div>)
                }
            </div>
        )
    }
}



import React from "react";
import socket from "src/socket";

export default class NameInput extends React.Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);

    }

    clickHandler(e) {
        e.stopPropagation();
        let name = document.getElementById("playerNameInput");
        this.props.submit(name.value);
    }

    render() {
        return(
            <div>
                <input type="text" id="playerNameInput"/>
                <button onClick={this.clickHandler}>OK</button>
            </div>

        )
    }
}
import React from "react";

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
            <div className="row player-name-input">
                <div className="col-md-8 col-sm-8">
                    <input placeholder="Type in your name" className="form-control" type="text" id="playerNameInput"/>
                </div>
                <div className="col-md-4 col-sm-4">
                    <button className="btn btn-primary" onClick={this.clickHandler}>OK</button>
                </div>
            </div>

        )
    }
}
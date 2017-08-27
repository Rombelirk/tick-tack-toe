import React from "react";


export default class SearchForGame extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let that = this;
        return(
            <button onClick={that.props.searchGame}>Search for Game</button>
        )
    }
}
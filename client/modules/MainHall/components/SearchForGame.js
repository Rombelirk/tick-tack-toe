import React from "react";


export default class SearchForGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let that = this;
        return (
            <div>
                {this.props.searchingForGame
                    ?
                    <button className="btn btn-success search-game-button" onClick={that.props.stopGameSearching}>
                        <p>Stop searching</p>
                        <i className="fa fa-spinner fa-spin fa-1x fa-fw" aria-hidden="true"/>
                    </button>
                     :
                    <button className="btn btn-success search-game-button" onClick={that.props.startGameSearching}>
                        <p>Search for game</p>
                    </button>

                }
            </div>
        )
    }
}
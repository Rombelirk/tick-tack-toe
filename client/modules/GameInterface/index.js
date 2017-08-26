import { connect } from "react-redux";
import GameInterface from "./components/GameInterface";
import * as actions from "modules/GameInterface/actions/GameInterface";



const mapStateToProps = (state) => {
    return {
        gameInterface: state.gameInterface
    }
};

export default connect(mapStateToProps, actions)(GameInterface);
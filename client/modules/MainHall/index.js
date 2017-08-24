import { connect } from "react-redux";
import MainHall from "./components/MainHall";
import * as actions from "modules/MainHall/actions/mainHall";



const mapStateToProps = (state) => {
    return {
        mainHall: state.mainHall
    }
};

export default connect(mapStateToProps, actions)(MainHall);
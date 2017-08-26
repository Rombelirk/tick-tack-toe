import { connect } from "react-redux";
import MainHallWithRouter from "./containers/MainHallWithRouter";
import * as actions from "modules/MainHall/actions/mainHall";



const mapStateToProps = (state) => {
    return {
        mainHall: state.mainHall
    }
};

export default connect(mapStateToProps, actions)(MainHallWithRouter);
import { connect } from "react-redux";
import MainHall from "./components/MainHall";



const mapStateToProps = (state) => {
    return {
        mainHall: state.mainHall
    }
};

export default connect(mapStateToProps)(MainHall);
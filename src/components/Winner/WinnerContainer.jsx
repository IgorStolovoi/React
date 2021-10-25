import { connect } from "react-redux";
import Winner from "./Winner";
import { showWinnerAC } from "../../actions/userAC";
const mapStateToProps = (state) => ({
  users: state.playersInfo.users,
  winner: state.playersInfo.winner,
});
const mapDispatchToProps = (dispatch) => ({
  calculateWinner: (amount) => {
    if (amount) dispatch(showWinnerAC());
  },
});
const WinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Winner);
export default WinnerContainer;

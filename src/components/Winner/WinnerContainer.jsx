import { connect } from "react-redux";
import Winner from "./Winner";
import { showWinnerAC } from "../../actions/userAC";
const mapStateToProps = (state, ownProps) => {
  let currentGame = state.games.find(
    (game) => game.id === ownProps.route.match.params.competitionId
  );
  return {
    users: currentGame.users,
    winner: currentGame.winner,
  };
};
const mapDispatchToProps = (dispatch) => ({
  calculateWinner: (amount) => {
    if (amount) dispatch(showWinnerAC());
  },
});
const WinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Winner);
export default WinnerContainer;

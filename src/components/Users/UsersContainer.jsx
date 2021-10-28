import { connect } from "react-redux";
import Users from "./Users";
import {
  deleteUserAC,
  searchUserAC,
  addUserAC,
  clearInfoAC,
  showWinnerAC,
} from "../../actions/userAC";
import { addGameInfoAC } from "../../actions/gamesAC";

const mapStateToProps = (state, ownProps) => {
  let currentGame = state.games.find(
    (game) => game.id === ownProps.route.match.params.competitionId
  );

  return {
    users: currentGame.users,
    searchedUser: state.gameInfo.searchedUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  delete: (id) => {
    dispatch(deleteUserAC(id));
  },
  search: (text) => {
    dispatch(searchUserAC(text));
  },
  add: (user) => {
    dispatch(addUserAC(user));
  },
  giveInfo: (info) => {
    dispatch(addGameInfoAC(info));
  },
  clearInfo: () => {
    dispatch(clearInfoAC());
  },
  addWinner: () => {
    dispatch(showWinnerAC());
  },
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;

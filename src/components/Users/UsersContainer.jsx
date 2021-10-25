import { connect } from "react-redux";
import Users from "./Users";
import { deleteUserAC } from "../../actions/userAC";
import { searchUserAC } from "../../actions/userAC";
import { addUserAC } from "../../actions/userAC";
const mapStateToProps = (state) => ({
  users: state.playersInfo.users,
  searchedUser: state.playersInfo.searchedUser,
});
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
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;

import { connect } from "react-redux";
import RegisterForm from "./RegisterForm";
import { addPlayerValue } from "../../actions/formAC";
const mapStateToProps = (state) => ({
  player: state.newPlayer,
});
const mapDispatchToProps = (dispatch) => ({
  inputValue: (player) => {
    dispatch(addPlayerValue({ [player.name]: player.value }));
  },
});

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

export default RegisterFormContainer;

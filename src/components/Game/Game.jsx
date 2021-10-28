import React from "react";
import UsersContainer from "../Users/UsersContainer";
import RegisterFormContainer from "../RegisterForm/RegisterFormContainer";
import WinnerContainer from "../Winner/WinnerContainer";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import "./Game.scss";
import { useHistory } from "react-router";
function Game(props) {
  const history = useHistory();
  return (
    <>
      <main className="game__users">
        <PrimaryButton
          sx={{ margin: "0 auto", display: "block" }}
          onClick={() => {
            history.push("/");
          }}
        >
          Go back to games list
        </PrimaryButton>
        <UsersContainer route={props} />
      </main>
      <aside className="game__aside">
        <RegisterFormContainer />
        <WinnerContainer route={props} />
      </aside>
    </>
  );
}

export default Game;

import UsersContainer from "./components/Users/UsersContainer";
import RegisterFormContainer from "./components/RegisterForm/RegisterFormContainer";
import WinnerContainer from "./components/Winner/WinnerContainer";
import "./App.scss";
function App() {
  return (
    <div className="game">
      <main className="game__users">
        <UsersContainer />
      </main>
      <aside className="game__aside">
        <RegisterFormContainer />
        <WinnerContainer />
      </aside>
    </div>
  );
}

export default App;

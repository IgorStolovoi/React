import { userData } from "./userData";
import { useState } from "react";
import CardWrap from "./components/card/CardWrap";
import Header from "./components/header/Header";
import "./App.css";
function App() {
  let [users, setUsers] = useState(userData);
  let [name, setName] = useState("Input name for search");

  function filterByName(e) {
    e.preventDefault();
    let searchName = users.filter((item) => item.name.split(" ")[0] === name);
    setUsers(searchName);
    setName("");
  }

  function inputHandler(e) {
    setName(e.target.value);
  }
  function addNewUser(user) {
    setUsers([...users, user]);
    console.log(users);
  }

  return (
    <div className="App">
      <Header
        usersArr={users}
        nameFilter={filterByName}
        nameValue={inputHandler}
        addUser={addNewUser}
        value={{ input: name }}
      />
      <CardWrap usersArr={users} />
    </div>
  );
}

export default App;

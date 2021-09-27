import { userData } from "./userData";
import { useState } from "react";
import CardWrap from "./components/card/CardWrap";
import Header from "./components/header/Header";

import "./App.css";
function App() {
  let [users, setUsers] = useState(userData);

  function filterByName(name) {
    let searchName = users.filter((item) =>
      item.name
        .toLocaleLowerCase()
        .split(" ")[0]
        .includes(name.toLocaleLowerCase())
    );
    setUsers(searchName);
  }

  function addNewUser(user) {
    setUsers([...users, user]);
  }

  function sortByAge(param) {
    let sortedUsers = [...users].sort((a, b) => {
      return param === "ascending" ? a.age - b.age : b.age - a.age;
    });
    setUsers(sortedUsers);
  }
  function resetFilter() {
    setUsers(userData);
  }
  return (
    <div className="App">
      <Header
        nameFilter={filterByName}
        addUser={addNewUser}
        sortUser={sortByAge}
        reset={resetFilter}
      />
      <CardWrap usersArr={users} />
    </div>
  );
}

export default App;

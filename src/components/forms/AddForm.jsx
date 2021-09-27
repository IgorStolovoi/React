import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./Forms.module.css";
function AddForm({ add }) {
  let [newUser, setNewUser] = useState({
    name: "",
    age: "",
    gender: "",
    balance: "",
    picture: "",
  });
  function createNewUser(event) {
    event.preventDefault();
    add(newUser);
  }

  return (
    <div>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Add Form</h3>
      <form action="#" className={classes.input}>
        <Input
          onChange={(e) => {
            setNewUser({ ...newUser, name: e.target.value });
          }}
          placeholder="Input Ur Name"
        />
        <Input
          onChange={(e) => {
            setNewUser({ ...newUser, age: e.target.value });
          }}
          placeholder="Input Ur Age"
        />
        <Input
          onChange={(e) => {
            setNewUser({ ...newUser, gender: e.target.value });
          }}
          placeholder="Input Ur Gender"
        />
        <Input
          onChange={(e) => {
            setNewUser({ ...newUser, balance: e.target.value });
          }}
          placeholder="Input Ur Balance"
        />
        <Input
          onChange={(e) => {
            setNewUser({ ...newUser, picture: e.target.value });
          }}
          placeholder="Input Ur Img Url"
        />
        <Button onClick={createNewUser}>Add new User</Button>
      </form>
    </div>
  );
}

export default AddForm;

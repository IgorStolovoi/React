import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";
import classes from "./Forms.module.css";
import { useState } from "react";
function SearchForm(props) {
  let [name, setName] = useState("Input name for search");
  let [value, setValue] = useState("");
  function filterByName(e) {
    e.preventDefault();
    props.filter(name);
  }

  function sorted(e) {
    setValue(e.target.value);
    props.sort(e.target.value);
  }
  return (
    <div className={classes.form}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Search Form</h3>
      <form action="#" name="filter">
        <div>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder={name}
          />
          <Button onClick={filterByName} name={name}>
            Search by name
          </Button>
        </div>
        <Select
          selectedValue={value}
          onChange={sorted}
          optionsValue={[
            { value: "ascending", text: "По возрастанию" },
            { value: "descending", text: "По убыванию" },
          ]}
          defaultValue="Сортировка по возрасту"
        />
        <Button onClick={props.reset}>Reset filters</Button>
      </form>
    </div>
  );
}

export default SearchForm;

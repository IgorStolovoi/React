import SearchForm from "../forms/SearchForm";
import AddForm from "../forms/AddForm";
import classes from "./Header.module.css";
import React from "react";

export default React.memo(function Header(props) {
  console.log("kek");
  return (
    <header className={classes.header}>
      <AddForm add={props.addUser} clasess={classes} />
      <SearchForm
        filter={props.nameFilter}
        sort={props.sortUser}
        clasess={classes}
        reset={props.reset}
      />
    </header>
  );
});

// export default Header;

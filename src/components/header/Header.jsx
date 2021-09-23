import SearchForm from "../forms/SearchForm";
import AddForm from "../forms/AddForm";
import classes from "./Header.module.css"
function Header(props) {
    return (
        <header className={classes.header} >
           <AddForm add={props.addUser} clasess={classes}/>
           <SearchForm props={props} clasess={classes}/>
        </header>
    );
}

export default Header;
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";
function SearchForm({props}) {
    return (
        <div>
            <h3>Search Form</h3>
            <form action="#" name='add'>
              <Input onChange={props.nameValue} type='text' placeholder={props.value.input}/>
              <Button onClick={props.nameFilter}>Search by name</Button>
              <Select />
            </form> 
        </div>
       
    );
}

export default SearchForm;
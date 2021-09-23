import SingleCard from "./SingleCard";
import { v4 as uniqId } from 'uuid';
import classes from './CardWrap.module.css'

function CardWrap(props) {
    return (  
        <div className={classes.cards__wrapper}>
            {
                  props.usersArr.map((item)=>{ return <SingleCard info={item} key={uniqId()}/>})   
            }
        </div>
    );
}

export default CardWrap;
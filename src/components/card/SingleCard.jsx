import classes from "./Card.module.css";

function SingleCard(props) {
  return (
    <div className={classes.card} onClick={props.onClick}>
      <img
        className={classes.card__img}
        src={props.info.picture}
        alt={props.info.name}
      />
      <p>
        <strong>name:</strong>
        {props.info.name}
      </p>
      <p>
        <strong>age:</strong>
        {props.info.age}
      </p>
      <p>
        <strong>gender:</strong>
        {props.info.gender}
      </p>
      <p>
        <strong>balance:</strong>
        {props.info.balance}
      </p>
    </div>
  );
}

export default SingleCard;

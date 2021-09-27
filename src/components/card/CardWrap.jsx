import { v4 as uniqId } from "uuid";
import { useState } from "react";
import SingleCard from "./SingleCard";
import classes from "./CardWrap.module.css";
import Modal from "../Modal/Modal";
function CardWrap(props) {
  let [active, setActive] = useState({
    el: "",
    visible: false,
  });
  function showModal(item) {
    setActive({ el: item, visible: !active.visible });
  }
  return (
    <div>
      <div className={classes.cards__wrapper}>
        {props.usersArr.length ? (
          props.usersArr.map((item) => {
            return (
              <SingleCard
                info={item}
                key={uniqId()}
                onClick={() => {
                  showModal(item);
                }}
              />
            );
          })
        ) : (
          <h1>Пусто</h1>
        )}
      </div>
      <Modal visible={active} setVisible={setActive}>
        {<SingleCard info={active.el} key={uniqId()} />}
      </Modal>
    </div>
  );
}

export default CardWrap;

import classes from "./Modal.module.css";
function Modal({ children, ...props }) {
  let showed = [classes.modal];
  if (props.visible.visible) {
    showed.push(classes.active);
  }
  return (
    <div
      className={showed.join(" ")}
      onClick={() => {
        props.setVisible({ ...props.visible, visible: !props.visible.visible });
      }}
    >
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
}

export default Modal;

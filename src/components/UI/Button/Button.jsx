import "./Button.scss";
function Button({ onClick, children, ...props }) {
  console.log(props);
  const classes = ["primaryBtn"];

  if (props.disabled) {
    classes.push("disabled");
  }
  return (
    <button className={classes.join(" ")} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;

import { Button } from "@material-ui/core";
function FormButton({ children, ...props }) {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#000",
        border: "1px solid",
        minWidth: "75px",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default FormButton;

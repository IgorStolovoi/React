import { Button } from "@mui/material";

function PrimaryButton({ children, ...props }) {
  return (
    <Button
      sx={{ margin: "0 auto" }}
      size="small"
      variant="outlined"
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;

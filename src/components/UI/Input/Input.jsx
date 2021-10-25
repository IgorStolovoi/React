import React from "react";
import TextField from "@mui/material/TextField";

export const Input = React.forwardRef((props, ref) => {
  return (
    <TextField
      sx={{
        mb: 3,
        width: "100%",
      }}
      size="small"
      variant="outlined"
      ref={ref}
      {...props}
    />
  );
});

export default Input;

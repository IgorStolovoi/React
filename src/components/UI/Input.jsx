import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      sx={{
        mb: 3,
      }}
      size="small"
      variant="outlined"
      inputRef={ref}
      {...props}
    />
  );
});

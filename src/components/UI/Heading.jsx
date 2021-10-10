import { Typography } from "@material-ui/core";

function Heading({ children }, ...props) {
  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        mb: 4,
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default Heading;

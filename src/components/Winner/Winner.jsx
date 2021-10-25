import { Box } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import { Typography } from "@mui/material";
import parseTime from "../../utils/parseTime";
function Winner(props) {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {Object.keys(props.winner).length ? (
        <Box>
          <Typography variant="h6" component="div">
            ID:{props.winner.id}
          </Typography>
          <Typography variant="h6" component="div">
            Player:{`${props.winner.firstName} ${props.winner.secondName}`}
          </Typography>
          <Typography variant="h6" component="div">
            Time:{parseTime(props.winner.time)}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography
            sx={{ textAlign: "center", mb: 4 }}
            variant="h5"
            component="div"
          >
            Total participant : {props.users.length}
          </Typography>
          <PrimaryButton
            onClick={() => props.calculateWinner(props.users.length)}
            sx={{ display: "block", margin: "0 auto" }}
          >
            Show Winner
          </PrimaryButton>
        </Box>
      )}
    </Box>
  );
}

export default Winner;

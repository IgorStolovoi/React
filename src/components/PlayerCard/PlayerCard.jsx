import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import parseTime from "../../utils/parseTime";
export default function PlayerCard({ player, onClick }) {
  return (
    <Box
      sx={{ maxWidth: "230px", width: "100%", marginRight: 2, marginBottom: 2 }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            ID:{player.id}
          </Typography>
          <Typography variant="h6" component="div">
            Player:{`${player.firstName} ${player.secondName}`}
          </Typography>
          <Typography variant="h6" component="div">
            Time:{parseTime(player.time)}
          </Typography>
        </CardContent>
        <CardActions>
          <PrimaryButton
            onClick={() => {
              onClick(player.id);
            }}
          >
            Delete
          </PrimaryButton>
        </CardActions>
      </Card>
    </Box>
  );
}

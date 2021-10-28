import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
export default function GameCard({ game, onClick }) {
  return (
    <Box
      sx={{
        width: "230px",
        marginRight: 2,
        marginBottom: 2,
      }}
    >
      <Card
        sx={{
          height: "220px",
          display: "flex",
          flexDirection: "column",
        }}
        variant="outlined"
      >
        <CardContent sx={{}}>
          <Typography variant="h6" component="div">
            ID:{game.id}
          </Typography>
          <Typography variant="h6" component="div">
            Name {game.name}
          </Typography>
          <Typography variant="h6" component="div">
            Status:{game.status}
          </Typography>

          {Object.entries(game.winner).length ? (
            <Typography variant="h6" component="div">
              {`Winner:${game.winner.firstName} 
              ${game.winner.secondName}`}
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <PrimaryButton
            onClick={() => {
              onClick(game.id);
            }}
          >
            Show
          </PrimaryButton>
        </CardActions>
      </Card>
    </Box>
  );
}

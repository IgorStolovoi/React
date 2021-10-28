import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useTimer from "../../hooks/useTimer";
import { Box } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import { addUserAC } from "../../actions/userAC";
import { addPlayerValue } from "../../actions/formAC";
import { resetFormFields } from "../../actions/formAC";
import { Typography } from "@mui/material";
import parseTime from "../../utils/parseTime";
import "./Timer.scss";

function Timer(props) {
  const player = useSelector((state) => state.newPlayer);
  const dispatch = useDispatch();
  const { startTime, stopTime, resetTime, time, timerStoped } = useTimer();

  let activeClass = ["timer"];
  if (props.active) {
    activeClass.push("active");
  }

  React.useEffect(() => {
    dispatch(addPlayerValue({ time: time.counter }));
  }, [time]);
  return (
    <Box className={activeClass.join(" ")}>
      <Box className="timer__content" sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          Participant
        </Typography>
        <Typography variant="h6" component="div">
          ID:{player.id}
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          Player:{`${player.firstName} ${player.secondName}`}
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          {parseTime(player.time)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 4,
          }}
        >
          <PrimaryButton
            onClick={() => {
              startTime();
            }}
            disabled={!!time.counter}
          >
            Start
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              stopTime();
            }}
            disabled={!time.counter || timerStoped}
          >
            Stop
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              resetTime();
            }}
            disabled={!timerStoped}
          >
            Reset
          </PrimaryButton>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PrimaryButton
            onClick={() => {
              props.setActive(false);
              resetTime();
              dispatch(resetFormFields());
            }}
          >
            Cancel
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              props.setActive(false);
              dispatch(addUserAC([player]));
              dispatch(resetFormFields());
              resetTime();
            }}
            disabled={!timerStoped}
          >
            Save
          </PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Timer;

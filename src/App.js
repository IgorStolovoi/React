import React from "react";
import Button from "./components/UI/Button";
import TimeList from "./components/TimeList";
import classes from "./components/UI/Buttons.module.css";
function App() {
  let [time, setTime] = React.useState({
    timeToShow: "00:00:00",
    counter: 0,
  });
  let [continueBtn, setContinueBtn] = React.useState(false);
  let [showedTime, setShowedTime] = React.useState([]);

  let timerId = React.useRef();

  function startTime() {
    if (timerId.current) {
      return;
    }
    let interval = setInterval(() => {
      setTime((prop) => {
        let secs = Math.floor(prop.counter % 60).toString();
        let mins = Math.floor((prop.counter / 60) % 60).toString();
        let hours = Math.floor((prop.counter / (60 * 60)) % 24).toString();
        let showTime = `${hours.padStart(2, "0")}:${mins.padStart(
          2,
          "0"
        )}:${secs.padStart(2, "0")}`;
        return {
          timeToShow: showTime,
          counter: prop.counter + 1,
        };
      });
    }, 1000);
    timerId.current = interval;
  }

  function stopTime() {
    clearInterval(timerId.current);
    timerId.current = "";
    setShowedTime((prop) => {
      if (time.counter === 0) {
        return [...prop];
      }
      return [...prop, time.timeToShow];
    });
  }

  React.useEffect(() => {
    if (localStorage.getItem("time")) {
      setShowedTime(JSON.parse(localStorage.getItem("time")));
      return;
    }
    localStorage.setItem("time", "[]");
  }, []);

  React.useEffect(() => {
    localStorage.setItem("time", JSON.stringify(showedTime));
  }, [showedTime]);

  return (
    <div className={classes.timer}>
      <div className={classes.time}>{time.timeToShow}</div>
      <div>
        {continueBtn ? (
          <Button onClick={startTime} className={classes.button}>
            Continue
          </Button>
        ) : (
          <Button onClick={startTime} className={classes.button}>
            Start
          </Button>
        )}
        <Button
          onClick={() => {
            if (timerId.current) setContinueBtn(true);
            stopTime();
          }}
          className={classes.button}
        >
          Stop
        </Button>
        <Button
          onClick={() => {
            stopTime();
            setTime({ timeToShow: "00:00:00", counter: 0 });
            setContinueBtn(false);
          }}
          className={classes.button}
        >
          Reset
        </Button>
      </div>

      <TimeList times={showedTime} />
    </div>
  );
}

export default App;

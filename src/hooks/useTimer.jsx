import React from "react";
import parseTime from "../utils/parseTime";
const useTimer = function () {
  const [time, setTime] = React.useState({
    timeToShow: "00:00:00",
    counter: 0,
  });
  const [timerStoped, setTimerStoped] = React.useState(false);

  const timerId = React.useRef();

  function startTime() {
    if (timerId.current) {
      return;
    }
    const interval = setInterval(() => {
      setTime((prop) => {
        let time = parseTime(prop.counter);
        return {
          timeToShow: time,
          counter: prop.counter + 1,
        };
      });
    }, 1000);
    timerId.current = interval;
  }

  function stopTime() {
    if (!time.counter) {
      return;
    }
    clearInterval(timerId.current);
    timerId.current = "";
    setTimerStoped(true);
  }

  function resetTime() {
    stopTime();
    setTimerStoped(false);
    setTime({ timeToShow: "00:00:00", counter: 0 });
  }
  return { startTime, stopTime, resetTime, time, timerStoped };
};
export default useTimer;

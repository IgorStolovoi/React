const parseTime = function (value) {
  let secs = Math.floor(value % 60).toString();
  let mins = Math.floor((value / 60) % 60).toString();
  let hours = Math.floor((value / (60 * 60)) % 24).toString();
  let showTime = `${hours.padStart(2, "0")}:${mins.padStart(
    2,
    "0"
  )}:${secs.padStart(2, "0")}`;
  return showTime;
};

export default parseTime;

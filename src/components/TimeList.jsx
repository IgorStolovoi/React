import { v4 as keyGen } from "uuid";
function TimeList(props) {
  return (
    <ul>
      {props.times.map((time) => {
        return <li key={keyGen()}>{time}</li>;
      })}
    </ul>
  );
}

export default TimeList;

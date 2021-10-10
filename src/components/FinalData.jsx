import { useFormContext } from "../context/FormContext";
import Heading from "./UI/Heading";
import { Avatar } from "@material-ui/core";
import List from "../../node_modules/@material-ui/core/List";
import ListItem from "../../node_modules/@material-ui/core/ListItem";
import ListItemText from "../../node_modules/@material-ui/core/ListItemText";
import { v4 as id } from "uuid";
function FinalData() {
  const [state] = useFormContext();
  const listData = Object.entries(state.data).filter((item) => {
    return !/^(img)|(password)$/i.test(item[0]);
  });
  const avatar = state.data.img.chosenImg;
  const listNames = ["Имя", "Фамилия", "Email", "Город", "Улица", "Дом"];
  return (
    <>
      <Heading>Спасибо за регистрацию</Heading>
      <Avatar
        alt="avatar"
        src={avatar}
        sx={{ width: "80px", height: "80px", margin: "0 auto" }}
      />
      <List>
        {listData.map((item, ind) => (
          <ListItem key={id()} secondaryAction={<p>{item[1]}</p>}>
            <ListItemText primary={`${listNames[ind]}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FinalData;

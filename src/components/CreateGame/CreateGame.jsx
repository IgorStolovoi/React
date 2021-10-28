import React, { useState } from "react";
import Input from "../UI/Input/Input";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForGame } from "../../utils/validationSchema";
import { getId } from "../../utils/getId";
import { useDispatch } from "react-redux";
import { addGameAC } from "../../actions/gamesAC";
import { useHistory } from "react-router-dom";
import "./CreateGame.scss";
function CreateGame() {
  const [inputState, setInputState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaForGame),
  });
  const onTextInput = (e) => {
    setInputState(e.target.value);
  };
  const onSubmit = () => {
    const ID = getId();
    dispatch(addGameAC({ name: inputState, id: ID }));
    history.push("/");
  };
  return (
    <div className="createGame">
      <Typography
        sx={{ textAlign: "center", mb: 4 }}
        variant="h5"
        component="div"
      >
        Register New Game
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("gameName", {
            onChange: onTextInput,
          })}
          label="Enter name of the game ..."
          error={!!errors.gameName}
          helperText={errors?.gameName?.message}
          value={inputState}
        />
        <PrimaryButton
          sx={{ display: "block", margin: "0 auto" }}
          type="submit"
          disabled={!isValid}
        >
          Register New Game
        </PrimaryButton>
      </form>
    </div>
  );
}

export default CreateGame;

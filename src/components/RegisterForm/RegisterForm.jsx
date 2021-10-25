import React from "react";
import Input from "../UI/Input/Input";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/validationSchema";
import { v4 as id } from "uuid";
import Timer from "../Timer/Timer";
function RegisterForm(props) {
  const [timerActive, setTimerActive] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onTextInput = (e) => {
    props.inputValue(e.target);
  };
  const onSubmit = () => {
    let ID = id()
      .split("")
      .filter((el) => Number.isInteger(+el))
      .slice(0, 5)
      .join("");
    props.inputValue({ name: "id", value: ID });
    setTimerActive((prop) => !prop);
  };

  return (
    <>
      <Typography
        sx={{ textAlign: "center", mb: 4 }}
        variant="h5"
        component="div"
      >
        Registration User
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName", {
            onChange: onTextInput,
          })}
          label="Enter first name ..."
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          value={props.player.firstName}
        />
        <Input
          {...register("secondName", {
            onChange: onTextInput,
          })}
          label="Enter second name ..."
          error={!!errors.secondName}
          helperText={errors?.secondName?.message}
          value={props.player.secondName}
        />
        <PrimaryButton
          sx={{ display: "block", margin: "0 auto" }}
          type="submit"
          disabled={!isValid}
        >
          Register participant
        </PrimaryButton>
      </form>
      <Timer active={timerActive} setActive={setTimerActive} />
    </>
  );
}

export default RegisterForm;

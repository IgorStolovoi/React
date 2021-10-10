import React from "react";
import Heading from "./UI/Heading";
import Box from "../../node_modules/@material-ui/core/Box";
import { Input } from "./UI/Input";
import FormButton from "./UI/FormButton";
import { useForm } from "../../node_modules/react-hook-form";
import { useFormContext } from "../context/FormContext";
import {
  onInputText,
  ON_INPUT_TEXT,
  STEP,
  onStep,
} from "../reducer/formReducer";

function FourthForm() {
  const [state, dispatch] = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  function onSubmit() {
    dispatch(onStep(STEP, 5));
  }
  function onTextInput(e) {
    dispatch(onInputText(ON_INPUT_TEXT, { [e.target.name]: e.target.value }));
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Шаг : 4</Heading>
        <Input
          {...register("password", {
            onChange: onTextInput,
            pattern: {
              value: /^[a-z0-9]{4,}$/i,
              message:
                "Пароль длинной в 4 символа, содержит только буквы и цифры",
            },
            required: true,
          })}
          value={state.data.password}
          type="password"
          label="Пароль"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Input
          {...register("retypedPassword", {
            onChange: onTextInput,
            validate: (value) =>
              value === state.data.password || "Пароли не совпадают",
            required: true,
          })}
          value={state.data.retypedPassword}
          type="password"
          label="Подтвердите пароль"
          error={!!errors.retypedPassword}
          helperText={errors?.retypedPassword?.message}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <FormButton
            onClick={() => {
              dispatch(onStep(STEP, 3));
            }}
          >
            Previous
          </FormButton>
          <FormButton disabled={!isValid} type="submit">
            Submit
          </FormButton>
        </Box>
      </form>
    </>
  );
}

export default FourthForm;

import React from "react";
import Box from "../../node_modules/@material-ui/core/Box";
import Heading from "./UI/Heading";
import { Input } from "./UI/Input";
import FormButton from "./UI/FormButton";
import { schemaForSecond } from "../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "../../node_modules/react-hook-form";
import { useFormContext } from "../context/FormContext";
import {
  onInputText,
  ON_INPUT_TEXT,
  STEP,
  onStep,
} from "../reducer/formReducer";

function SecondForm() {
  const [state, dispatch] = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaForSecond),
  });
  function onSubmit() {
    dispatch(onStep(STEP, 3));
  }
  function onTextInput(e) {
    dispatch(onInputText(ON_INPUT_TEXT, { [e.target.name]: e.target.value }));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Шаг : 2</Heading>
        <Input
          {...register("city", {
            onChange: onTextInput,
          })}
          label="Город"
          error={!!errors.city}
          helperText={errors?.city?.message}
          value={state.data.city}
        />
        <Input
          {...register("street", {
            onChange: onTextInput,
          })}
          label="Улица"
          error={!!errors.street}
          helperText={errors?.street?.message}
          value={state.data.street}
        />
        <Input
          {...register("house", {
            onChange: onTextInput,
          })}
          label="Дом"
          error={!!errors.house}
          helperText={errors?.house?.message}
          value={state.data.house}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <FormButton
            onClick={() => {
              dispatch(onStep(STEP, 1));
            }}
          >
            Previous
          </FormButton>
          <FormButton disabled={!isValid} type="submit">
            Next
          </FormButton>
        </Box>
      </form>
    </>
  );
}

export default SecondForm;

import React from "react";
import Heading from "./UI/Heading";
import { Input } from "./UI/Input";
import FormButton from "./UI/FormButton";
import { schemaForFirst } from "../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "../../node_modules/react-hook-form";
import { useFormContext } from "../context/FormContext";
import {
  STEP,
  onStep,
  ON_INPUT_TEXT,
  onInputText,
} from "../reducer/formReducer";

function FirstForm() {
  const [state, dispatch] = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaForFirst),
  });
  function onSubmit() {
    dispatch(onStep(STEP, 2));
  }
  function onTextInput(e) {
    dispatch(onInputText(ON_INPUT_TEXT, { [e.target.name]: e.target.value }));
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Шаг : 1</Heading>
        <Input
          {...register("firstName", {
            onChange: onTextInput,
          })}
          label="Имя"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          value={state.data.firstName}
        />
        <Input
          {...register("lastName", {
            onChange: onTextInput,
          })}
          label="Фамилия"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          value={state.data.lastName}
        />
        <Input
          {...register("email", {
            onChange: onTextInput,
          })}
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          value={state.data.email}
        />
        <FormButton disabled={!isValid} type="submit">
          Next
        </FormButton>
      </form>
    </>
  );
}

export default FirstForm;

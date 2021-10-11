import React from "react";
import { v4 as id } from "uuid";
import Box from "../../node_modules/@material-ui/core/Box";
import Heading from "./UI/Heading";
import { Input } from "@material-ui/core";
import FormButton from "./UI/FormButton";
import { useFormContext } from "../context/FormContext";
import {
  STEP,
  onStep,
  LOAD_AVATAR,
  uploadAvatar,
} from "../reducer/formReducer";

function ThirdForm() {
  const [state, dispatch] = useFormContext();

  function onSubmit() {
    dispatch(onStep(STEP, 4));
  }
  function handleUploadImg(e) {
    let fileReader = new FileReader();
    let file = e.target.files[0];
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      if (/(?<=image\/)((jpeg)|(png)|(svg))/.test(fileReader.result)) {
        return dispatch(uploadAvatar(LOAD_AVATAR, fileReader.result));
      }
    };
  }
  function handleChoosedImg(e) {
    if (e.target.src) {
      dispatch(uploadAvatar(LOAD_AVATAR, `${e.target.src}`));
    }
  }
  return (
    <form noValidate onSubmit={onSubmit}>
      <Heading>Шаг : 3</Heading>
      <Input
        type="file"
        sx={{
          mb: 2,
        }}
        onChange={handleUploadImg}
      />
      {state.data.img.chosenImg === "" ? (
        <p
          style={{ marginBottom: "27px", marginTop: "27px", fontSize: "32px" }}
        >
          No IMG for Avatar:C
        </p>
      ) : (
        <img
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            margin: "5px",
            border: "1px solid blue",
          }}
          src={state.data.img.chosenImg}
          alt="avatar"
        />
      )}

      <Box
        sx={{ display: "flex", flexWrap: "wrap", mb: "10px" }}
        onClick={handleChoosedImg}
      >
        {state.data.img.listImg.map((item) => {
          return (
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                margin: "5px",
              }}
              src={item}
              key={id()}
              alt="avatar"
            />
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <FormButton
          onClick={() => {
            dispatch(onStep(STEP, 2));
          }}
        >
          Previous
        </FormButton>
        <FormButton disabled={state.data.img.chosenImg === ""} type="submit">
          Next
        </FormButton>
      </Box>
    </form>
  );
}

export default ThirdForm;

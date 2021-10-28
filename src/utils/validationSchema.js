import * as yup from "yup";
export const schemaForPlayer = yup.object().shape({
  firstName: yup
    .string()
    .required("Name is required")
    .matches(/^[a-z\u0400-\u04FF]{1,10}$/i, "Name must contain only letters"),
  secondName: yup
    .string()
    .required("Second name is required")
    .matches(
      /^[a-z\u0400-\u04FF]{1,10}$/i,
      "SurName must contain only letters"
    ),
});
export const schemaForGame = yup.object().shape({
  gameName: yup
    .string()
    .required("name of the game is required")
    .matches(
      /^[a-z\u0400-\u04FF/\s]{1,15}$/i,
      "name of the game must contain only letters"
    ),
});

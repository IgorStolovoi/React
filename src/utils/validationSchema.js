import * as yup from "yup";
export const schema = yup.object().shape({
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

export const INPUT_VALUE = "Input-Value";
export const addPlayerValue = (value) => ({
  type: INPUT_VALUE,
  payload: value,
});
//////////////////////
export const RESET_FIELDS = "Reset-Fields";
export const resetFormFields = () => ({
  type: RESET_FIELDS,
});

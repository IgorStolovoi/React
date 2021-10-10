import * as yup from "../../node_modules/yup";

export const schemaForFirst = yup.object().shape({
  firstName: yup
    .string()
    .required("Имя обязательное")
    .matches(
      /^[a-z\u0400-\u04FF]{1,10}$/i,
      "Имя должно состоять только из букв"
    ),
  lastName: yup
    .string()
    .required("Фамилия обязательна")
    .matches(
      /^[a-z\u0400-\u04FF]{1,10}$/i,
      "Фамилия должна состоять только из букв"
    ),
  email: yup
    .string()
    .required("Email обязателен")
    .email("Введите валидный email"),
});

export const schemaForSecond = yup.object().shape({
  city: yup
    .string()
    .required("Город обязателен")
    .min("2", "Недопустимое количество символов")
    .matches(
      /^[a-z\u0400-\u04FF]+[-/\s]?[a-z\u0400-\u04FF]+$/i,
      'Пример "Санта-Фе-де-Богота","Нью Йорк"'
    ),

  street: yup
    .string()
    .required("Улица обязателен")
    .min("2", "Недопустимое количество символов")
    .matches(
      /^[a-z\u0400-\u04FF]+[-/\s]?[a-z\u0400-\u04FF]+$/i,
      "Введите корректное название улицы"
    ),

  house: yup
    .string()
    .required("Номер дома обязателен")
    .matches(/^\d{1,5}[a-z\u0400-\u04FF]?$/i, "ВВедите корректный номер дома"),
});

import * as yup from "yup";

export const LoginFormScheme = yup.object().shape({
  email: yup.string().email("Неверное значение").required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Обязательное поле"),
});

export const RegisterFormScheme = yup
  .object()
  .shape({
    fullName: yup.string().required(),
  })
  .concat(LoginFormScheme);

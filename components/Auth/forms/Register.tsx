import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Typography } from "@material-ui/core";

import styles from "../Auth.module.scss";
import { RegisterFormScheme } from "../../../utils/validation";
import { FormField } from "../../FormField";
import { CreateUserDto } from "../../../utils/api/types";
import { UserApi } from "../../../utils/api";
import { setCookie } from "nookies";
import Alert from "@material-ui/lab/Alert";

type RegisterFormProps = { setFormLogin: () => void };

export const RegisterForm: React.FC<RegisterFormProps> = ({ setFormLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormScheme),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      setCookie(null, "token", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage('')
    } catch (err) {
      setErrorMessage('err')
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Typography classes={{ root: styles.title }}>
          Зарегистрироваться
        </Typography>
        <Typography classes={{ root: styles.pretitle }}>
          или <span onClick={setFormLogin}>войти</span>
        </Typography>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <FormField name="fullName" label="Имя и Фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <Button
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          type="submit"
          color="primary"
          variant="contained"
        >
          Зарегистроваться
        </Button>
      </form>
    </FormProvider>
  );
};

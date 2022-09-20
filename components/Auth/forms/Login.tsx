import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Typography } from "@material-ui/core";

import styles from "../Auth.module.scss";
import { LoginFormScheme } from "../../../utils/validation";
import { FormField } from "../../FormField";

type LoginFormProps = {
  setFormRegister: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ setFormRegister }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormScheme),
  });

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Typography classes={{ root: styles.title }}>
        Войти через почту
      </Typography>
      <Typography classes={{ root: styles.pretitle }}>
        или <span onClick={setFormRegister}>зарегистрироваться</span>
      </Typography>
      <FormProvider {...form}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
      </FormProvider>
      <Button
        disabled={!form.formState.isValid}
        type="submit"
        color="primary"
        variant="contained"
      >
        Войти
      </Button>
    </form>
  );
};

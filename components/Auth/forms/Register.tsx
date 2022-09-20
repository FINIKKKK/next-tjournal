import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Typography } from "@material-ui/core";

import styles from "../Auth.module.scss";
import { RegisterFormSchema } from "../../../utils/validation";
import { FormField } from "../../FormField";

type RegisterFormProps = { setFormLogin: () => void };

export const RegisterForm: React.FC<RegisterFormProps> = ({ setFormLogin }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Typography classes={{ root: styles.title }}>
        Зарегистрироваться
      </Typography>
      <Typography classes={{ root: styles.pretitle }}>
        или <span onClick={setFormLogin}>войти</span>
      </Typography>
      <FormProvider {...form}>
        <FormField name="name" label="Имя и Фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
      </FormProvider>
      <Button
        disabled={!form.formState.isValid}
        type="submit"
        color="primary"
        variant="contained"
      >
        Зарегистроваться
      </Button>
    </form>
  );
};

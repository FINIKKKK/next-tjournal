import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Typography } from "@material-ui/core";

import styles from "../Auth.module.scss";
import { LoginFormScheme } from "../../../utils/validation";
import { FormField } from "../../FormField";
import { LoginDto } from "../../../utils/api/types";
import { UserApi } from "../../../utils/api";
import { setCookie } from "nookies";
import { Alert } from "@material-ui/lab";
import { userSliceSelector } from "../../../redux/user/selectors";
import { setUserData } from "../../../redux/user/slice";
import { useDispatch } from "react-redux";

type LoginFormProps = {
  setFormRegister: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ setFormRegister }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormScheme),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, "token", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      dispatch(setUserData(data))
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("err");
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Typography classes={{ root: styles.title }}>
          Войти через почту
        </Typography>
        <Typography classes={{ root: styles.pretitle }}>
          или <span onClick={setFormRegister}>зарегистрироваться</span>
        </Typography>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <Button
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          type="submit"
          color="primary"
          variant="contained"
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};

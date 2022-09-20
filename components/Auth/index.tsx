import React from "react";
import { Dialog, DialogContent, DialogContentText } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { LoginForm } from "./forms/Login";
import { MainForm } from "./forms/Main";
import { RegisterForm } from "./forms/Register";

import styles from "./Auth.module.scss";

type AuthProps = {
  visible: boolean;
  setVisible: () => void;
};

export const Auth: React.FC<AuthProps> = ({ visible, setVisible }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );

  return (
    <Dialog open={visible} onClose={setVisible} maxWidth="xs">
      <DialogContent classes={{ root: styles.content }}>
        <DialogContentText>
          {formType !== "main" && (
            <ArrowBackIcon
              onClick={() => setFormType("main")}
              classes={{ root: styles.arrow }}
            />
          )}
          {formType === "main" && (
            <MainForm setFormLogin={() => setFormType("login")} />
          )}
          {formType === "login" && (
            <LoginForm setFormRegister={() => setFormType("register")} />
          )}
          {formType === "register" && (
            <RegisterForm setFormLogin={() => setFormType("login")} />
          )}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

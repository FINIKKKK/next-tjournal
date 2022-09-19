import React from "react";
import clsx from "clsx";
import { Input, Button } from "@material-ui/core";

import styles from "./FormComment.module.scss";

type FormCommentProps = {};

export const FormComment: React.FC<FormCommentProps> = ({}) => {
  const [clickedInput, setClickedInput] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");

  const onSubmitInput = () => {
    setClickedInput(false);
    setTextInput("");
  };

  return (
    <div className={`${styles.box} ${clickedInput ? "active" : ""}`}>
      <Input
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
        onClick={() => setClickedInput(true)}
        classes={{ root: styles.input }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
        minRows={clickedInput ? 5 : 1}
      />
      {clickedInput && (
        <Button
          onClick={onSubmitInput}
          classes={{ root: styles.btn }}
          variant="contained"
          color="primary"
        >
          Отправить
        </Button>
      )}
    </div>
  );
};

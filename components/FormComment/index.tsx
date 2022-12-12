import React from "react";
import clsx from "clsx";
import { Input, Button } from "@material-ui/core";

import styles from "./FormComment.module.scss";
import { Api } from "../../utils/api";
import { ResponseUser, TComment } from "../../utils/api/types";

type FormCommentProps = {
  postId: number;
  onAddComment: (obj: TComment) => void;
};

export const FormComment: React.FC<FormCommentProps> = ({
  postId,
  onAddComment,
}) => {
  const [clickedInput, setClickedInput] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmitInput = async () => {
    try {
      setIsLoading(true);
      const comment = await Api().comment.create({
        postId,
        text: textInput,
      });
      onAddComment(comment);
      setTextInput("");
      setClickedInput(false);
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.box} ${clickedInput ? "active" : ""}`}>
      <Input
        disabled={isLoading}
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
          disabled={isLoading}
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
